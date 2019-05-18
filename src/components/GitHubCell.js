import React from 'react';
import PropTypes from 'prop-types';

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
			<td className={`${ owner }-${ repo }`}>
				<img src={avatar} alt='avatar' />
				{' '}
				<a href={link}>{`${ owner }/${ repo } - ${ stars } stars`}</a>
				<p>{desc}</p>
			</td>
		);
	}
}
