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
