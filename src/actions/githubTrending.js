import * as types from './actionsTypes';

export function githubTrendingRequest() {
	return {
		type: types.GITHUB_TRENDING.REQUEST
	}
}

export function githubTrendingSuccess() {
	return {
		type: types.GITHUB_TRENDING.SUCCESS
	}
}

export function githubTrendingFailure(err) {
	return {
		type: types.GITHUB_TRENDING.FAILURE,
		err
	}
}