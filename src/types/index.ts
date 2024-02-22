import { Context, Api } from "grammy";
import { I18nFlavor } from "@grammyjs/i18n";

export type ContextType = Context & I18nFlavor;

export type BotApiType = { api: Api };
