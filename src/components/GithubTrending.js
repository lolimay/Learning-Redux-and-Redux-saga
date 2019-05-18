import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as githubTrendingActions from '../actions/githubTrending';

import GitHubCell from './GitHubCell';

@connect(state => ({
	trendingLists: state.githubTrending.result
}), dispatch => ({
	refresh: () => dispatch(githubTrendingActions.refresh())
}))

export default class GitHubTrending extends React.Component {
	static propTypes = {
		trendingLists: PropTypes.array,
		refresh: PropTypes.func
	}

	createTable = (trendingLists) => {
		const table = [];

		trendingLists.forEach((trendingItem) => {
			const {
				avatar, desc, link, owner, repo, stars
			} = trendingItem;

			table.push(
				<tr>
					<GitHubCell
						avatar={avatar}
						desc={desc}
						link={link}
						owner={owner}
						repo={repo}
						stars={stars}
					/>
				</tr>
			);
		});

		return table;
	}

	render() {
		const { trendingLists, refresh } = this.props;

		return (
			<div className='github-trending'>
				<button type='button' onClick={refresh}>
					Refresh
				</button>
				{this.createTable(trendingLists)}
			</div>
		);
	}
}
