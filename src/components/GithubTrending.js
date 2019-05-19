import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as githubTrendingActions from '../actions/githubTrending';

import GitHubCell from './GitHubCell';
import Spinner from './Spinner';

@connect(state => ({
	trendingList: state.githubTrending.trendingList,
	isFetching: state.githubTrending.isFetching
}), dispatch => ({
	refresh: () => dispatch(githubTrendingActions.githubTrendingRequest())
}))

export default class GitHubTrending extends React.Component {
	static propTypes = {
		trendingList: PropTypes.array,
		refresh: PropTypes.func,
		isFetching: PropTypes.bool
	}

	createTable = (trendingList) => {
		const list = [];

		trendingList.forEach((trendingItem) => {
			const {
				avatar, desc, link, owner, repo, stars
			} = trendingItem;

			list.push(
				<li key={`${ owner }/${ repo }`}>
					<GitHubCell
						avatar={avatar}
						desc={desc}
						link={link}
						owner={owner}
						repo={repo}
						stars={stars}
					/>
				</li>
			);
		});

		return <ul>{list}</ul>;
	}

	render() {
		const { trendingList, refresh, isFetching } = this.props;

		return (
			<div className='github-trending'>
				<h1>GitHub TrendingLists</h1>
				<button type='button' onClick={refresh}>
					Refresh
				</button>
				{!isFetching ? null : <Spinner />}
				{this.createTable(trendingList)}
			</div>
		);
	}
}
