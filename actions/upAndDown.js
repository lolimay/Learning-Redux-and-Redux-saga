import * as types from './actionsTypes';

export function upAndDownRequest() {
	return {
		type: types.UPANDDOWN.SUCCESS
	};
}

// Action function wrapper
// We can pass parameters to the action here
export function up() {
	return {
		type: types.UPANDDOWN.UP
	};
}

export function down() {
	return {
		type: types.UPANDDOWN.DOWN
	};
}

export function upIfOdd(step = 1) {
	return {
		type: types.UPANDDOWN.UP.UP_IF_ODD,
		step
	};
}
