const TOGGLE_LOGGING = 'TOGGLE_LOGGING';
const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
const defaultTypes = [
	TOGGLE_LOGGING,
	TOGGLE_MESSAGE
];

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const requestTypes = [REQUEST, SUCCESS, FAILURE];

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

export const GITHUB_TRENDING = createRequestTypes('GITHUB_TRENDING', [
	...requestTypes
]);
