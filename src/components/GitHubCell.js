import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	height: 30
};

export default class GitHubCell extends React.PureComponent {
	static propTypes = {
		avatar: PropTypes.string,
		desc: PropTypes.string,
		link: PropTypes.string,
		owner: PropTypes.string,
		repo: PropTypes.string,
		stars: PropTypes.string
	};

	render() {
		const {
			avatar, desc, link, owner, repo, stars
		} = this.props;

		return (
			<div className={`${ owner }-${ repo }`}>
				<img src={avatar} alt='avatar' style={styles} />
				{' '}
				<a href={link} target='_blank'>{`${ owner }/${ repo } - ${ stars } stars`}</a>
				<p>{desc}</p>
			</div>
		);
	}
}
