interface Chat {
	senderPic: string;
	senderName: string;
	lastMessage: string;
	isUnread?: boolean;
	id: number;
}

export default Chat;