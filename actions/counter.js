import * as types from './actionsTypes';

// Action function wrapper
// We can pass parameters to the action here
export function setLogging() {
	return {
		type: types.COUNTER.SET_LOGGING
	};
}

export function unSetLogging() {
	return {
		type: types.COUNTER.UNSET_LOGGING
	};
}

export function turnOnMessage() {
	return {
		type: types.COUNTER.TURN_ON_MESSAGE
	};
}

export function turnOffMessage() {
	return {
		type: types.COUNTER.TURN_OFF_MESSAGE
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
		step
	};
}
