import { Composer } from "grammy";
import { ContextType } from "../../types/index.js";

export const composer = new Composer<ContextType>();

composer.callbackQuery(['one', 'two', 'three'], async (ctx) => {
    try {
        await ctx.answerCallbackQuery()
        await ctx.deleteMessage()
        await ctx.reply('Okey bro!')
    } catch (error) {
        console.error(error);
    }
});
