import './App.css';

import ChatList from './components/ChatList/ChatList';
import ChatView from './components/ChatView/ChatView';

const App = (): JSX.Element => {
	return (
		<div className="App">
			<ChatList />
			<ChatView />
		</div>
	);
};

export default App;
