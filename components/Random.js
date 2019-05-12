import React from 'react';
import PropTypes from 'prop-types';

const Random = ({
	value, onGenerateRandom
}) => (
	<div>
		<button type='button' onClick={onGenerateRandom}>
            Generate
		</button>
		<hr />
		<div>
            Result: {value}
		</div>
	</div>
);

Random.propTypes = {
	value: PropTypes.number.isRequired,
	onGenerateRandom: PropTypes.func.isRequired
};

export default Random;
