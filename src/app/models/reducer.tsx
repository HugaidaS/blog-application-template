import { IReducerAction } from './interfaces';

export default function reducerComponent(state: any, action: IReducerAction) {
	switch (action.type) {
		case 'add':
			return [ action.post, ...state ];
		case 'delete':
			return state.filter((post: any) => post !== action.post);
		default:
			throw new Error();
	}
}
