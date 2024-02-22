import { InlineKeyboard } from "grammy";

// const labelDataPairs = [
//   "Yes, they certainly are",
//   "I'm not quite sure",
//   "No. 😈",
// ];;
// const buttonRow = labelDataPairs.map(([label, data]) => InlineKeyboard.text(label, data));
// export const keyboard = InlineKeyboard.from([buttonRow]);

// or

export const keyboard = new InlineKeyboard()
    .text("Yes, they certainly are", "one")
    .row()
    .text("I'm not quite sure", "two")
    .text("No. 😈", "three");
