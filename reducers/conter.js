import * as types from '../actions/actionsTypes';
// reducer is a special function that decide how every action transforms the entire application's state.

const initialSate = {
	number: 0,
	isLogging: false,
	hasMessage: false
};

export default function counter(state = initialSate, action) {
	switch (action.type) {
		case types.COUNTER.SET_LOGGING:
			return {
				...state,
				isLogging: true
			};
		case types.COUNTER.UNSET_LOGGING:
			return {
				...state,
				isLogging: false
			};
		case types.COUNTER.TURN_ON_MESSAGE:
			return {
				...state,
				hasMessage: true
			};
		case types.COUNTER.TURN_OFF_MESSAGE:
			return {
				...state,
				hasMessage: false
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
				number: (state.number % 2 !== 0) ? state.number + action.step : state.number
			};
		default:
			return state;
	}
}
