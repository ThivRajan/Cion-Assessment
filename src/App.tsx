import './App.css';
import { useState } from 'react';
import faker from 'faker';
import { Icon } from '@iconify/react';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';
import ChatList from './components/ChatList/ChatList';
import ChatView from './components/ChatView/ChatView';
import Chat from './models/Chat';
import userPic from './assets/user.png';

const initialChats: Chat[] = [];
for (let i = 0; i < 20; i++) {
	initialChats.push({
		senderPic: faker.image.avatar(),
		senderName: faker.name.findName(),
		lastMessage: faker.lorem.sentences(),
		isUnread: Math.floor(Math.random() * 2) ? true : false,
		id: i
	});
}

const App = (): JSX.Element => {
	const [chats, setChats] = useState<Chat[]>(initialChats);
	const [selectedChat, setSelectedChat] = useState(0);

	return (
		<div className="App">
			<div className="app-header">
				<h2>Chat App</h2>
				<div className="user-details">
					<img src={userPic} alt="Profile Picture" className="user-profile-pic" />
					John Smith
					<Icon icon={arrowDownAlt2} className="profile-arrow-icon" />
				</div>
			</div>
			<div className="app-contents">
				<ChatList
					chats={chats}
					setChats={setChats}
					selectedChat={selectedChat}
					setSelectedChat={setSelectedChat}
				/>
				<ChatView
					contactName={initialChats[selectedChat].senderName}
					contactImage={initialChats[selectedChat].senderPic}
					contactMessage={initialChats[selectedChat].lastMessage}
				/>
			</div>
		</div>
	);
};

export default App;
