import * as types from './actions/actionsTypes'
// reducer is a special function that decide how every action transforms the entire application's state.

const initialSate = {
	number: 0,
	isLogging: false,
	message: ''
};

export default function counter(state = initialSate, action) {
	switch (action.type) {
		case types.UPANDDOWN.UP:
			return {
				...state,
				number: state.number + 1
			};
		case types.UPANDDOWN.DOWN:
			return {
				...state,
				number: state.number - 1
			};
		case types.UPANDDOWN.UP_ID_ODD:
			return {
				...state,
				number: (state.number % 2 !== 0) ? state.number + 1 : state.number,
				message: 'Added via ADD_IF_ODD action'
			};
		default:
			return state;
	}
}
