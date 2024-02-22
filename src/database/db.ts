// import { Client as ClientTypes } from './../../node_modules/@types/pg/index.d';
import dotenv from "dotenv";
dotenv.config();
import pg, { ClientBase } from "pg"
const { Client } = pg;

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA,
    port: process.env.DB_PORT as unknown as number,
};


class Db {
    db: ClientBase;
    constructor() {
        this.db = new Client({
            user: config.user,
            host: config.host,
            database: config.database,
            password: config.password,
            port: config.port
        });
        this.init();
    }

    async init() {
        try {
            this.db.connect();
            await this.createSchema();
            await this.createTables();
            await this.db.query(`SET search_path TO ${config.schema}`);
            console.log("Database initialized successfully");
        } catch (error) {
            console.error("Failed to initialize database:", error);
        }
    }

    async query(query: string, params?: unknown[]) {
        const { rows } = await this.db.query(query, params);
        return rows;
    }

    async createSchema() {
        await this.db.query(
            `CREATE SCHEMA IF NOT EXISTS "${process.env.DB_SCHEMA}";`
        );
    }

    async createTables() {
        await this.db.query(`
        CREATE TABLE IF NOT EXISTS "${process.env.DB_SCHEMA}".users (
            id SERIAL PRIMARY KEY,
            tg_user_id INTEGER,
            tg_user_name VARCHAR(255)
        );
    `);

        await this.db.query(`
            CREATE TABLE IF NOT EXISTS "${process.env.DB_SCHEMA}".assets (
                id SERIAL PRIMARY KEY,
                list VARCHAR[],
                procent INTEGER,
                user_id INTEGER REFERENCES "${process.env.DB_SCHEMA}".users (id)
            );
        `);
    }
}

export const db = new Db();
