import { Composer } from "grammy";
import { ContextType } from "../../types/index.js";
import { keyboard } from "../../keyboards/inline/index.js";

export const composer = new Composer<ContextType>();

composer.command("start", async (ctx) => {
    try {
        const username = ctx.message?.from.username || "user";
        await ctx.reply(ctx.t("welcome", { username }), {
            parse_mode: "HTML", reply_markup: keyboard
        });

        await ctx.api.sendSticker(
            ctx.chat.id,
            "CAACAgIAAxkBAAEJ0HZkwCcDaERON_p7u1eSXqHJ3jJ8pgACiwEAAiteUwujYbxpJDSDUC8E"
        );
    } catch (error) {
        console.error(error);
    }
});
