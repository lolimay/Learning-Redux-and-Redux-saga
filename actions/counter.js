import * as types from './actionsTypes';

// Action function wrapper
// We can pass parameters to the action here
export function counterSetLogging() {
	return {
		type: types.COUNTER.SET_LOGGING
	};
}

export function counterUnsetLogging() {
	return {
		type: types.COUNTER.UNSET_LOGGING
	};
}

export function counterTurnOnMessage() {
	return {
		type: types.COUNTER.TURN_ON_MESSAGE
	};
}

export function counterTurnOffMessage() {
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
