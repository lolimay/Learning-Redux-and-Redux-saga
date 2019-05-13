import * as types from '../actions/actionsTypes';

const initialState = {
	number: 0,
	isLogging: false,
	hasMessage: false
};

//! Things you should never do inside a reducer:
// Mutate its arguments;
// Perform side effects like API calls and routing transitions;
// Call non-pure functions, e.g. Date.now() or Math.random().
//! The reducer must be pure:
// TODO Given the same arguments, it should calculate the next state and return it.
// TODO - No surprises.
// TODO - No side effects.
// TODO - No API calls.
// TODO - No mutations.
// TODO  Just a **calculation**.
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
