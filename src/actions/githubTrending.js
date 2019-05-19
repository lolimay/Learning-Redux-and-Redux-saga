import * as types from './actionsTypes';

export function githubTrendingRequest() {
	return {
		type: types.GITHUB_TRENDING.REQUEST
	};
}

export function githubTrendingSuccess(trendingList) {
	return {
		type: types.GITHUB_TRENDING.SUCCESS,
		payload: {
			trendingList
		}
	};
}

export function githubTrendingFailure(err) {
	return {
		type: types.GITHUB_TRENDING.FAILURE,
		err
	};
}

export function refresh() {
	return {
		type: types.GITHUB_TRENDING.REFRESH
	};
}
