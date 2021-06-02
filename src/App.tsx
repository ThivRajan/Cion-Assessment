import './App.css';
import { Icon } from '@iconify/react';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';

import ChatList from './components/ChatList/ChatList';
import ChatView from './components/ChatView/ChatView';

import userPic from './assets/user.png';

const App = (): JSX.Element => {
	return (
		<div className="App">
			<div className="app-header">
				<h2>Chat App</h2>
				<div className="user-details">
					<img src={userPic} alt="Profile Picture" className="user-profile-pic" />
					Test User
					<Icon icon={arrowDownAlt2} className="profile-arrow-icon" />
				</div>
			</div>
			<div className="app-contents">
				<ChatList />
				<ChatView />
			</div>
		</div>
	);
};

export default App;
