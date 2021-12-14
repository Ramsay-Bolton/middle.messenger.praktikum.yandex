import Block from '../block';
import chatItemTemplate from './chatItem.tmpl';

export default class ChatItem extends Block {
  constructor(props: {
    userImage: string;
    userName: string;
    message: string;
    messageCount?: number;
  }) {
    super(chatItemTemplate, props);
  }
}
