import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';

@connect(state => ({
	number: state.number,
	isLogging: state.isLogging,
	hasMessage: state.hasMessage
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
				<button type='button' onClick={up()}>
					Increment
				</button>
				{' '}
				<button type='button' onClick={down()}>
					Decrement
				</button>
				{' '}
				<button type='button' onClick={upIfOdd()}>
					IncrementIfOdd
				</button>
				{' '}
				<button type='button' onClick={toggleLogging()}>
					{isLogging ? 'Cancel Logging' : 'Start Logging'}
				</button>
				{' '}
				<button type='button' onClick={toggleMessage()}>
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
	number: PropTypes.number.isRequired,
	isLogging: PropTypes.bool.isRequired,
	hasMessage: PropTypes.bool.isRequired,
	up: PropTypes.func.isRequired,
	down: PropTypes.func.isRequired,
	upIfOdd: PropTypes.func.isRequired,
	toggleLogging: PropTypes.func.isRequired,
	toggleMessage: PropTypes.func.isRequired
};

export default Counter;
