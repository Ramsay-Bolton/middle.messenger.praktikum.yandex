import './chats.css';
import chatsTemplate from './chats.tmpl';
import Block from '../../components/block';
import chatsPageData from './ChatsPageData';

export default class ChatsPage extends Block {
  constructor() {
    super(chatsTemplate, chatsPageData);
  }
}
