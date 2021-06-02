import './ChatList.css';


import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/line-md/search';
import chatNewFill from '@iconify-icons/ri/chat-new-fill';

const ChatList = (): JSX.Element => {
	return (
		<div className="chat-list-container">
			<div className="chat-search-container">
				<Icon icon={searchIcon} />
				<input className="chat-search-field" type="text" placeholder="Search...">
				</input>
				<Icon icon={chatNewFill} />
			</div>
		</div>
	);
};

export default ChatList;
