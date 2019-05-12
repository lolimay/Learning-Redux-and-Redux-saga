import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({
	value, onIncrement, onDecrement, onIncrementIfOdd
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
		<hr />
		<div>
			Clicked: {value} times
		</div>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onIncrementIfOdd: PropTypes.func.isRequired
};

export default Counter;
