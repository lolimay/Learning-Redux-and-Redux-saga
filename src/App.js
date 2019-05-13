import React from 'react';
import Counter from './components/Counter';
import Random from './components/Random';

export default function App() {
	return (
		<div className='counter-app'>
			<Counter />
			<Random />
		</div>
	);
}
