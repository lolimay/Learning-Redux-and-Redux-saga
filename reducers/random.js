import * as types from '../actions/actionsTypes';

const initialState = {
	number: 0,
	isLogging: false,
	hasMessage: false
};

export default function random(state = initialState, action) {
	switch (action.type) {
		case types.RANDOM.TOGGLE_LOGGING:
			return {
				...state,
				isLogging: !state.isLogging
			};
		case types.RANDOM.TOGGLE_MESSAGE:
			return {
				...state,
				hasMessage: !state.hasMessage
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
