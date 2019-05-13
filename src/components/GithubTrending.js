import React from 'react';
import PropTypes from 'prop-types';

import GitHubCell from './GithubCell';

import { connect } from 'react-redux';
import * as githubTrendingActions from '../actions/githubTrending';

@connect(state => ({
	result: state.githubTrending.result
}), dispatch => ({
	refresh: () => dispatch(githubTrendingActions.refresh())
}))

class GitHubTrending extends React.Component {
	render() {
		return (
			<div className='github-trending'>
				<button type='button'>
					Refresh
				</button>
				<GitHubCell />
			</div>
		);
	}
}