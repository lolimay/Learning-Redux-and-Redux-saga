import React from 'react';

const Counter = ({
	value, onIncrement, onDecrement, onIncrementIfOdd
}) => (
	<div>
		<button onClick={onIncrement}>
			Increment
		</button>
		{' '}
		<button onClick={onDecrement}>
			Decrement
		</button>
		{' '}
		<button onClick={onIncrementIfOdd}>
						IncrementIfOdd
		</button>
		<hr />
		<div>
			Clicked: {value} times
		</div>
	</div>
);

export default Counter;
