import './ChatList.css';
import { Dispatch, FC, useState } from 'react';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/line-md/search';
import chatNewFill from '@iconify-icons/ri/chat-new-fill';
import Chat from '../../models/Chat';

const ChatList: FC<{
	chats: Chat[];
	setChats: Dispatch<React.SetStateAction<Chat[]>>;
	selectedChat: number;
	setSelectedChat: Dispatch<React.SetStateAction<number>>;
}> = ({ chats, setChats, selectedChat, setSelectedChat }): JSX.Element => {
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
								const updatedChats = chats;
								updatedChats[updatedChats.indexOf(readChat)] = { ...readChat, isUnread: false };
								setChats(updatedChats);
							}
							return <ChatPreview
								key={idx}
								chat={filteredChat}
								isSelected={filteredChat.id === selectedChat}
								selectChat={setSelectedChat}
							/>;
						})
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
