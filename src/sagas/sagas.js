import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionsTypes';
import { githubTrendingSuccess, githubTrendingFailure } from '../actions/githubTrending';
import * as API from '../lib/API';

const handleFetchTrending = function* fetchTrendingList() {
	try {
		const trendingList = yield call(API.fetchTrendingList);
		yield put(githubTrendingSuccess(trendingList));
	} catch (err) {
		console.log(err);
		yield put(githubTrendingFailure(err));
	}
}

const root = function* root() {
	yield takeLatest(types.GITHUB_TRENDING.REQUEST, handleFetchTrending);
}

export default root;