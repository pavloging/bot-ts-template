import "dotenv/config";
import "./database/db.js";

import { Bot } from "grammy";
import { ContextType } from "./types/index.js";
import { setMyCommands } from "./untils/setMyCommands.js";
import { composer as startCommand } from "./composers/commands/start.command.js";
import { composer as startCallback } from "./composers/callbacks/start.callback.js";
import { composer as noneMessage } from "./composers/messages/none.messages.js";
import { i18nMiddleware, limitMiddleware } from "./plugins/index.js";

if (!process.env.TOKEN) throw new Error("invalided token");

const bot = new Bot<ContextType>(process.env.TOKEN);

// Settings
setMyCommands(bot);

// Plugins
bot.use(i18nMiddleware);
bot.use(limitMiddleware)

// Handlers
bot.use(startCommand);
bot.use(startCallback)
bot.use(noneMessage)

// Start
bot.start();
