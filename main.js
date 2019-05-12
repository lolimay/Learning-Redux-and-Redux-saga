import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Counter from './Counter';
import reducer from './reducers';
import helloSaga from './sagas';

// Redux Principles
// 1. The whole state of your app is stored in an object tree inside **a single store.** - a single store
// We can split the root reducer into smaller reducers independently operating on the different parts of the state tree.

// 2. The only way to change the state tree is to emit an action, an object describing what happened.
// 3. To specify how the actions transform the state tree, you write pure reducers.


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(
	reducer,
	applyMiddleware(createSagaMiddleware(helloSaga))
);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() => {
	console.log(store.getState());
});


// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
const action = type => store.dispatch({ type });

function render() {
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => action('INCREMENT')}
			onDecrement={() => action('DECREMENT')}
			onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
		/>,
		document.getElementById('root')
	);
}

render();
store.subscribe(render);
