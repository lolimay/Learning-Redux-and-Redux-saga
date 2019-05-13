import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as randomActionCreators from '../actions/random';

class Random extends React.Component {
	constructor(props) {
		super(props);

		const { dispatch } = props;

		this.boundActionCreators = bindActionCreators(randomActionCreators, dispatch);
	}

	render() {
		const { number } = this.props;
		const actions = this.boundActionCreators;

		return (
			<div>
				<button type='button' onClick={() => { actions.generate(); }}>
				Generate
				</button>
				<hr />
				<div>
				Result: {number}
				</div>
			</div>
		);
	}
}

Random.propTypes = {
	dispatch: PropTypes.func.isRequired,
	number: PropTypes.number.isRequired
};

export default Random;
