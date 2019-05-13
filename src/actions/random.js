import * as types from './actionsTypes';

export function toggleLogging() {
	return {
		type: types.RANDOM.TOGGLE_LOGGING
	};
}

export function toggleMessage() {
	return {
		type: types.RANDOM.TOGGLE_MESSAGE
	};
}

export function generate() {
	return {
		type: types.RANDOM.GENERATE
	};
}
