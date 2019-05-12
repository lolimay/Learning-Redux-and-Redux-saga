import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({
	value, isLogging, hasMessage, onIncrement, onDecrement, onIncrementIfOdd, onSwitchLogging, onSwitchMessage
}) => (
	<div>
		<button type='button' onClick={onIncrement}>
			Increment
		</button>
		{' '}
		<button type='button' onClick={onDecrement}>
			Decrement
		</button>
		{' '}
		<button type='button' onClick={onIncrementIfOdd}>
			IncrementIfOdd
		</button>
		{' '}
		<button type='button' onClick={onSwitchLogging}>
			{isLogging ? 'Cancel Logging' : 'Start Logging'}
		</button>
		{' '}
		<button type='button' onClick={onSwitchMessage}>
			{hasMessage ? 'Hide Message' : 'Show Message'}
		</button>
		<hr />
		<div>
			Clicked: {value} times
		</div>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	isLogging: PropTypes.bool.isRequired,
	hasMessage: PropTypes.bool.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onIncrementIfOdd: PropTypes.func.isRequired,
	onSwitchLogging: PropTypes.func.isRequired,
	onSwitchMessage: PropTypes.func.isRequired
};

export default Counter;
