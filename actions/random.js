import * as types from './actionsTypes';

export function setLogging() {
	return {
		type: types.RANDOM.SET_LOGGING
	};
}

export function unsetLogging() {
	return {
		type: types.RANDOM.UNSET_LOGGING
	};
}

export function turnOnMessage() {
	return {
		type: types.RANDOM.TURN_ON_MESSAGE
	};
}

export function turnOffMessage() {
	return {
		type: types.RANDOM.TURN_OFF_MESSAGE
	};
}

export function generate() {
	return {
		type: types.RANDOM.GENERATE
	};
}
