import './ChatList.css';
import { Dispatch, FC, useState } from 'react';

import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/line-md/search';
import chatNewFill from '@iconify-icons/ri/chat-new-fill';

import samplePic from '../../assets/sample-dp.png';

interface Chat {
	senderPic: string;
	senderName: string;
	lastMessage: string;
	isUnread?: boolean;
	id: number;
}

const initialChats = [
	{
		senderPic: samplePic,
		senderName: 'Joe Smith',
		lastMessage: 'Some sample message Some sample messageSome sample message',
		id: 0
	},
	{
		senderPic: samplePic,
		senderName: 'test',
		lastMessage: 'Some sample message Some sample messageSome sample message',
		id: 1
	},
	{
		senderPic: samplePic,
		senderName: 'Joe Smith',
		lastMessage: 'Some sample message Some sample messageSome sample message',
		id: 2,
		isUnread: true
	},
	{
		senderPic: samplePic,
		senderName: 'Joe Smith',
		lastMessage: 'Some sample message Some sample messageSome sample message',
		id: 3
	},
	{
		senderPic: samplePic,
		senderName: 'test',
		lastMessage: 'Some sample message Some sample messageSome sample message',
		id: 4
	},
	{
		senderPic: samplePic,
		senderName: 'Joe Smith',
		lastMessage: 'Some sample message Some sample messageSome sample message',
		id: 5,
		isUnread: true
	},
];

const ChatList = (): JSX.Element => {

	const [chats, setChats] = useState<Chat[]>(initialChats);
	const [selectedChat, setSelectedChat] = useState(0);
	const [chatFilter, setChatFilter] = useState('');

	return (
		<div className="chat-list-container">
			<div className="chat-search-container">
				<Icon icon={searchIcon} />
				<input
					className="chat-search-field"
					type="text"
					placeholder="Search..."
					onChange={(event) => setChatFilter(event.target.value)}
				/>
				<Icon icon={chatNewFill} className="new-chat-icon" />
			</div>
			<div className="chat-list">
				{
					chats
						.filter((chat) => chat.senderName.toLowerCase().includes(chatFilter.toLowerCase()))
						.map((filteredChat, idx) => {
							if (filteredChat.id === selectedChat && filteredChat.isUnread) {
								const readChat = chats.find(chat => chat.id === filteredChat.id) as Chat;
								readChat.isUnread = false;
								setChats(chats.filter(chat => chat.id !== readChat.id).concat(readChat));
							}
							return <ChatPreview
								key={idx}
								chat={filteredChat}
								isSelected={filteredChat.id === selectedChat}
								selectChat={setSelectedChat}
							/>;
						}
						)
				}
			</div>
		</div>
	);
};

const ChatPreview: FC<{
	chat: Chat; isSelected:
	boolean;
	selectChat: Dispatch<React.SetStateAction<number>>;
}>
	= ({ chat, isSelected, selectChat }): JSX.Element => {
		return (
			<div className={`chat-preview-container ${isSelected && 'selected-chat'}`} onClick={() => selectChat(chat.id)}>
				<img src={chat.senderPic} alt="Profile Picture" className="sender-profile-pic" />
				<div className="chat-info">
					<span className={`chat-sender ${chat.isUnread && 'unread-chat-sender'}`}>{chat.senderName}</span>
					<span className={`chat-last-msg ${!chat.isUnread && 'read-chat-msg'}`}>{chat.lastMessage}</span>
				</div>
			</div>
		);
	};

export default ChatList;
