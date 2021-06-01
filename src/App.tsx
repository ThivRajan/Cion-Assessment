import './App.css';
import { useEffect } from 'react';
import { useStore, setName } from './state';

const App = (): JSX.Element => {
	const [{ name }, dispatch] = useStore();

	// Example usage of state
	useEffect(() => {
		dispatch(setName('new name'));
	}, []);
	console.log('New store name', name);

	return (
		<div className="App">
			React Boilerplate with State Hook
		</div>
	);
};

export default App;
