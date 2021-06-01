import { State } from './state';

enum ActionType {
	SetName = 'SET_NAME'
}

export type Action = {
	type: ActionType;
	payload: string;
};

export const setName = (payload: string): Action => ({ type: ActionType.SetName, payload });

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case ActionType.SetName:
			return {
				...state,
				name: action.payload
			};
		default:
			return state;
	}
};