import * as types from './actionsTypes';

export function upAndDownRequest() {
    return {
        type: types.UPANDDOWN.SUCCESS
    };
}

// Action function wrapper
// We can pass parameters to the action here
export function upAndDownSuccess(err) {
    return {
        type: types.UPANDDOWN.FAILURE,
        err
    }
}