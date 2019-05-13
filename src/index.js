import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Random from './components/Random';
import reduxStore from './createStore';

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
reduxStore.subscribe(() => {
	console.log(JSON.stringify(reduxStore.getState(), null, 4));
});

function render() {
	const { counter, random } = reduxStore.getState();

	ReactDOM.render(
		<div>
			<Counter
				dispatch={reduxStore.dispatch}
				number={counter.number}
				isLogging={counter.isLogging}
				hasMessage={counter.hasMessage}
			/>
			<Random
				dispatch={reduxStore.dispatch}
				number={random.number}
			/>
		</div>,
		document.getElementById('root')
	);
}

render();
reduxStore.subscribe(render);
