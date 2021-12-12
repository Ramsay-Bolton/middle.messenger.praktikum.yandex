import { IChatsProps } from './IChatsProps';
import ChatItem from '../../components/ChatItem/chatItem';
import AndrewImage from '../../../static/images/chats/Andrew.png';
import DavidImage from '../../../static/images/chats/David.png';
import HannaImage from '../../../static/images/chats/Hanna.png';
import JohnImage from '../../../static/images/chats/John.png';
import SofiaImage from '../../../static/images/chats/Sofia.png';
import ValeryImage from '../../../static/images/chats/Valery.png';
import sidebarLogoImage from '../../../static/images/logo.png';

const chatsPageData: IChatsProps = {
    sidebarLogoImage: sidebarLogoImage,
    items: [
        new ChatItem({
            userImage: AndrewImage,
            userName: 'Andrew',
            message: 'Hello!!',
            messageCount: 1
        }).render(),
        new ChatItem({
            userImage: DavidImage,
            userName: 'David',
            message: 'Bye bye',
            messageCount: 1
        }).render(),
        new ChatItem({
            userImage: HannaImage,
            userName: 'Hanna',
            message: 'xoxoxo',
        }).render(),
        new ChatItem({
            userImage: JohnImage,
            userName: 'John',
            message: 'okaaaay',
            messageCount: 3
        }).render(),
        new ChatItem({
            userImage: SofiaImage,
            userName: 'Sofia',
            message: 'see you',
            messageCount: 2
        }).render(),
        new ChatItem({
            userImage: ValeryImage,
            userName: 'Valery',
            message: '...',
        }).render(),
        new ChatItem({
            userImage: AndrewImage,
            userName: 'Matt',
            message: 'how you are dooooing???',
            messageCount: 1
        }).render(),
    ]
}

export default chatsPageData;