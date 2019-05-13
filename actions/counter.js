import * as types from './actionsTypes';

// Action function wrapper
// We can pass parameters to the action here
// Actions are plain JavaScript objects.
// Actions must have a type property that indicates the type of action being performed.
export function toggleLogging() {
	return {
		type: types.COUNTER.TOGGLE_LOGGING
	};
}

export function toggleMessage() {
	return {
		type: types.COUNTER.TOGGLE_MESSAGE
	};
}

export function up() {
	return {
		type: types.COUNTER.UP
	};
}

export function down() {
	return {
		type: types.COUNTER.DOWN
	};
}

export function upIfOdd(step = 1) {
	return {
		type: types.COUNTER.UP_IF_ODD,
		payload: {
			step
		}
	};
}
