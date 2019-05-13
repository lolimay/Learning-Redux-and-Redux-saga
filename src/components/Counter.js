import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as counterActionCreators from '../actions/counter';

//! onClick={() => { actions.upIfOdd(); }}>
// If the action has other params, we need to apply arrow function!

class Counter extends React.Component {
	constructor(props) {
		super(props);

		const { dispatch } = props;

		// The only way to mutate the internal state is to dispatch an action.
		// The actions can be serialized, logged or stored and later replayed.
		// We can send the action to the store using store.dispatch();
		// TODO Desciption:
		// Turns an object whose values are action creators, into an object with the same keys,
		// but with every action creator wrapped into a dispatch call so they may be invoked directly.
		this.boundActionCreators = bindActionCreators(counterActionCreators, dispatch);
	}

	render() {
		const { number, isLogging, hasMessage } = this.props;
		const actions = this.boundActionCreators;

		return (
			<div>
				<button type='button' onClick={() => { actions.up(); }}>
					Increment
				</button>
				{' '}
				<button type='button' onClick={() => { actions.down(); }}>
					Decrement
				</button>
				{' '}
				<button type='button' onClick={() => { actions.upIfOdd(); }}>
					IncrementIfOdd
				</button>
				{' '}
				<button type='button' onClick={() => { actions.toggleLogging(); }}>
					{isLogging ? 'Cancel Logging' : 'Start Logging'}
				</button>
				{' '}
				<button type='button' onClick={() => { actions.toggleMessage(); }}>
					{hasMessage ? 'Hide Message' : 'Show Message'}
				</button>
				<hr />
				<div>
					Clicked: {number} times
				</div>
			</div>
		);
	}
}

Counter.propTypes = {
	dispatch: PropTypes.func.isRequired,
	number: PropTypes.number.isRequired,
	isLogging: PropTypes.bool.isRequired,
	hasMessage: PropTypes.bool.isRequired
};

export default Counter;
