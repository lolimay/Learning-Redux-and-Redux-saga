import { combineReducers } from 'redux';
import counter from './conter';
import random from './random';
import githubTrending from './githubTrending';

// eslint-disable-next-line no-unused-vars
function lastAction(state = null, action) {
	return action;
}

export default combineReducers({
	counter,
	random,
	githubTrending,
	lastAction
});
