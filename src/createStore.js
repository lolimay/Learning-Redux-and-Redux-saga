import { createStore } from 'redux';
import reducers from './reducers';

// Redux Principles
// 1. The whole state of your app is stored in an object tree inside **a single store.** - a single store
// We can split the root reducer into smaller reducers independently operating on the different parts of the state tree.

// 2. The only way to change the state tree is to emit an action, an object describing what happened.
// 3. To specify how the actions transform the state tree, you write pure reducers.


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

/* eslint-disable no-underscore-dangle */
const reduxStore = createStore(
reducers, /* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default reduxStore;
