import { Composer } from "grammy";
import { ContextType } from "../../types/index.js";

export const composer = new Composer<ContextType>();

composer.hears(/.*/, async (ctx) => {
    try {
        await ctx.reply(ctx.t('none'));
    } catch (error) {
        console.error(error);
    }
});
