import { conversationSchema } from "./conversationSchema";
import { messageSchema } from "./messageSchema";
import { userSchema } from "./userSchema";

import { model } from "mongoose";

export const Conversation = model("Conversation", conversationSchema);
export const Message = model("Message", messageSchema);
export const User = model("User", userSchema);
