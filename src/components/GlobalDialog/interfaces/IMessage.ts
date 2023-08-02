import { TMessageType } from "./TMessageType";

/**
 * メッセージ
 */
export interface IMessage {
  /**
   * ID
   */
  messageId: number;

  /**
   * 種類
   */
  messageType: TMessageType;

  /**
   * 内容
   */
  content: string;
}

/**
 * 値がメッセージかどうかを返す
 * @param value 任意の値
 *
 * @returns
 * true メッセージである
 *
 * false メッセージではない
 */
export function isMessage(value: unknown): value is IMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  return "messageId" in value && "messageType" in value && "content" in value;
}
