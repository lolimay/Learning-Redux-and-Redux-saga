import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';

@connect(state => ({
	number: state.counter.number,
	isLogging: state.counter.isLogging,
	hasMessage: state.counter.hasMessage
}), dispatch => ({
	up: () => dispatch(counterActions.up()),
	down: () => dispatch(counterActions.down()),
	upIfOdd: () => dispatch(counterActions.upIfOdd()),
	toggleLogging: () => dispatch(counterActions.toggleLogging()),
	toggleMessage: () => dispatch(counterActions.toggleMessage())
}))

class Counter extends React.Component {
	render() {
		const {
			number,
			isLogging,
			hasMessage,
			up,
			down,
			upIfOdd,
			toggleLogging,
			toggleMessage
		} = this.props;

		return (
			<div>
				<h1>A Simple Counter</h1>
				<button type='button' onClick={up}>
					Increment
				</button>
				{' '}
				<button type='button' onClick={down}>
					Decrement
				</button>
				{' '}
				<button type='button' onClick={upIfOdd}>
					IncrementIfOdd
				</button>
				{' '}
				<button type='button' onClick={toggleLogging}>
					{isLogging ? 'Cancel Logging' : 'Start Logging'}
				</button>
				{' '}
				<button type='button' onClick={toggleMessage}>
					{hasMessage ? 'Hide Message' : 'Show Message'}
				</button>
				<div>
					Clicked: {number} times
				</div>
			</div>
		);
	}
}

Counter.propTypes = {
	number: PropTypes.number,
	isLogging: PropTypes.bool,
	hasMessage: PropTypes.bool,
	up: PropTypes.func,
	down: PropTypes.func,
	upIfOdd: PropTypes.func,
	toggleLogging: PropTypes.func,
	toggleMessage: PropTypes.func
};

export default Counter;
