import { limit } from "@grammyjs/ratelimiter";
import { ContextType } from "../types/index.js";
import { RedisType } from "@grammyjs/ratelimiter/out/typesAndDefaults.js";

export const limitMiddleware = limit<ContextType, RedisType>({
    timeFrame: 2000,
    limit: 2,
    onLimitExceeded: async (ctx) => await ctx.reply(ctx.t("limit")),
});
