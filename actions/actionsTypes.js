const SET_LOGGING = 'SET_LOGGING';
const UNSET_LOGGING = 'UNSET_LOGGING';
const TURN_ON_MESSAGE = 'TURN_ON_MESSAGE';
const TURN_OFF_MESSAGE = 'TURN_OFF_MESSAGE';
const defaultTypes = [
	SET_LOGGING,
	UNSET_LOGGING,
	TURN_ON_MESSAGE,
	TURN_OFF_MESSAGE
];

function createRequestTypes(base, types = defaultTypes) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const COUNTER = createRequestTypes('COUNTER', [
	...defaultTypes,
	'UP',
	'DOWN',
	'UP_IF_ODD'
]);

export const RANDOM = createRequestTypes('RANDOM', [
	...defaultTypes,
	'GENERATE'
]);
