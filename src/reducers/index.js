import { combineReducers } from 'redux';
import counter from './conter';
import random from './random';
import githubTrending from './githubTrending';

export default combineReducers({
	counter,
	random,
	githubTrending
});
