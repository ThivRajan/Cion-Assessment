import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer, StateProvider } from './state';

ReactDOM.render(
	<StateProvider reducer={reducer}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</StateProvider>,
	document.getElementById('root')
);
