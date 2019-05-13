import React from 'react';
import PropTypes from 'prop-types';

class GithubCell extends React.Component {
	render() {
		const { avatar, desc, link, owner, repo, stars } = this.props;

		return (
			<div className={`${owner}-${repo}`}>
				<img src={avatar} />
				{' '}
				<a href={link}>{`${owner}/${repo} - ${stars} stars`}</a>
				<p>{desc}</p>
			</div>
		);
	}
}

GithubCell.PropTypes = {
	avatar: PropTypes.string,
	desc: PropTypes.string,
	link: PropTypes.string,
	owner: PropTypes.string,
	repo: PropTypes.string,
	starts: PropTypes.string
}