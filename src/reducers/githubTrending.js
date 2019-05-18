import * as types from '../actions/actionsTypes';

const initialState = {
	isFetching: false,
	failure: false,
	result: {},
	errorMessage: {}
};

export default function message(state = initialState, action) {
	switch (action.type) {
		case types.GITHUB_TRENDING.REQUEST:
			return {
				...state,
				isFetching: true,
				failure: false,
				errorMessage: {}
			};
		case types.GITHUB_TRENDING.SUCCESS:
			return {
				...state,
				isFetching: false
			};
		case types.GITHUB_TRENDING.FAILURE:
			return {
				...state,
				isFetching: false,
				failure: true,
				errorMessage: action.err
			};
		default:
			return state;
	}
}
