import React from 'react';
import Counter from './components/Counter';
import Random from './components/Random';
import GitHubTrending from './components/GithubTrending';

export default function App() {
	return (
		<div className='counter-app'>
			<Counter />
			<Random />
			<GitHubTrending />
		</div>
	);
}
