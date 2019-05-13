import * as types from '../actions/actionsTypes';
// reducer is a special function that decide how every action transforms the entire application's state.
// counterActionCreators :)

const initialSate = {
	number: 0,
	isLogging: false,
	hasMessage: false
};

export default function counter(state = initialSate, action) {
	switch (action.type) {
		case types.COUNTER.TOGGLE_LOGGING:
			return {
				...state,
				isLogging: !state.isLogging
			};
		case types.COUNTER.TOGGLE_MESSAGE:
			return {
				...state,
				hasMessage: !state.hasMessage
			};
		case types.COUNTER.UP:
			return {
				...state,
				number: state.number + 1
			};
		case types.COUNTER.DOWN:
			return {
				...state,
				number: state.number - 1
			};
		case types.COUNTER.UP_IF_ODD:
			return {
				...state,
				number: (state.number % 2 !== 0) ? (state.number + action.payload.step) : state.number
			};
		default:
			return state;
	}
}
