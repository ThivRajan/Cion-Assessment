import { Reducer, ReactElement, FC, Dispatch, createContext, useContext, useReducer } from 'react';
import { Action } from './reducer';

export type State = {
	name: string;
}

const initialState: State = { name: 'initial name' };
export const StateContext = createContext<[State, Dispatch<Action>]>([
	initialState,
	() => initialState
]);

type StateProviderProps = {
	reducer: Reducer<State, Action>;
	children: ReactElement;
};

export const StateProvider: FC<StateProviderProps> = ({
	reducer,
	children
}: StateProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={[state, dispatch]}>
			{children}
		</StateContext.Provider>
	);
};
export const useStore = (): [State, Dispatch<Action>] => useContext(StateContext);
