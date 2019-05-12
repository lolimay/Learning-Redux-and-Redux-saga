import * as types from '../actions/actionsTypes';

const initialState = {
	number: 0,
	isLogging: false,
	hasMessage: false
};

export default function random(state = initialState, action) {
	switch (action.type) {
		case types.RANDOM.SET_LOGGING:
			return {
				...state,
				isLogging: true
			};
		case types.RANDOM.UNSET_LOGGING:
			return {
				...state,
				isLogging: false
			};
		case types.RANDOM.TURN_ON_MESSAGE:
			return {
				...state,
				hasMessage: true
			};
		case types.RANDOM.TURN_OFF_MESSAGE:
			return {
				...state,
				hasMessage: false
			};
		case types.RANDOM.GENERATE:
			return {
				...state,
				number: Math.random()
			};
		default:
			return state;
	}
}
