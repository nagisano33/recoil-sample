import { atomFamily } from "recoil";
import { IMessage } from "../interfaces/IMessage";

/**
 * メッセージを管理する atomFamily
 */
export const messageStateFamily = atomFamily<IMessage | undefined, string>({
  key: "message.message",
  default: undefined,
});
