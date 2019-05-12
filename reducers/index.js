import { combineReducers } from 'redux';
import counter from './conter';
import random from './random';

export default combineReducers({
	counter,
	random
});
