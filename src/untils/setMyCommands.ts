import { BotApiType } from "../types/index.js";

export const setMyCommands = async (bot: BotApiType) => {
    await bot.api.setMyCommands([
        { command: "start", description: "Start the bot" },
        { command: "help", description: "Show help text" },
        { command: "settings", description: "Open settings" },
    ]);
};