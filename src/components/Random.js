import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as randomActions from '../actions/random';

@connect(state => ({
	number: state.random.number
}), dispatch => ({
	generate: () => dispatch(randomActions.generate())
}))

class Random extends React.Component {
	render() {
		const { number, generate } = this.props;

		return (
			<div>
				<button type='button' onClick={generate}>
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
	number: PropTypes.number,
	generate: PropTypes.func
};

export default Random;
