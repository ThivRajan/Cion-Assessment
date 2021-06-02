import { FC, useState } from 'react';
import './ChatView.css';

import { Icon } from '@iconify/react';
import formatChat from '@iconify-icons/dashicons/format-chat';
import bxsVideo from '@iconify-icons/bx/bxs-video';
import phoneIcon from '@iconify-icons/fa-solid/phone';
import micSharp from '@iconify-icons/ion/mic-sharp';
import chatCenteredTextFill from '@iconify-icons/ph/chat-centered-text-fill';

import samplePic from '../../assets/sample-dp.png';

interface Message {
	content: string;
	timeStamp: string;
	senderIsUser: boolean;
	isFirstMsg?: boolean;
	isLastMsg?: boolean;
}

enum ChatMode {
	Message = 'message',
	Video = 'video',
	Voice = 'voice'
}

const ChatView = (): JSX.Element => {

	const [chatMode, setChatMode] = useState<ChatMode>(ChatMode.Message);
	const modeIcons = {
		[ChatMode.Message]: formatChat,
		[ChatMode.Video]: bxsVideo,
		[ChatMode.Voice]: phoneIcon
	};

	const messages: Message[] = [
		{ content: 'yo!', timeStamp: '10:30am on Tue, Mar 23, 2015', senderIsUser: true, isFirstMsg: true, isLastMsg: true },
		{ content: 'testttt', timeStamp: '', senderIsUser: false },
		{ content: 'hello world', timeStamp: '', senderIsUser: false, isLastMsg: true },
	];

	return (
		<div className="chat-container">
			<div className="chat-header">
				<span className="user-info">
					<img src={samplePic} alt="sample-pic" className="profile-pic" />
					<span>Thiv</span>
				</span>

				<span className="chat-mode-controls">
					{
						Object.values(ChatMode).map((mode, idx) =>
							<button key={idx} onClick={() => setChatMode(mode)} className="chat-mode-button">
								<Icon
									icon={modeIcons[mode]}
									className={chatMode === mode ? 'selected-mode-icon' : 'unselected-mode-icon'}
								/>
							</button>
						)
					}
				</span>
			</div>
			<div className="messages-container">
				{messages.map((message, idx) => <MessageView key={idx} message={message} />)}
			</div>
			<div className="message-field-container">
				<input className="message-field" type="text" placeholder="Write a message...">
				</input>
				<span className="message-field-controls">
					<Icon icon={micSharp} className="message-field-icon" />
					<Icon icon={chatCenteredTextFill} className="message-field-icon" />
				</span>
			</div>
		</div>
	);
};

const MessageView: FC<{ message: Message }> = ({ message }): JSX.Element => {
	return (
		<div className={`message-container ${message.senderIsUser ? 'user-msg' : 'contact-msg'}`}>
			<div className='message-contents'>
				{
					message.senderIsUser && message.isFirstMsg &&
					<div className="user-msg-arrow"></div>
				}
				<div className={'message'}>
					{message.content}
				</div>
				{
					!message.senderIsUser && message.isLastMsg &&
					<div className="contact-msg-arrow"></div>
				}
				{
					message.senderIsUser && message.isLastMsg &&
					<span className="time-stamp">{message.timeStamp}</span>
				}
			</div>
		</div>
	);
};

export default ChatView;
