const UP = 'UP';
const DOWN = 'DOWN';
const defaultTypes = [UP, DOWN];
function createRequestTypes(base, types = defaultTypes) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const UPANDDOWN = createRequestTypes('UPANDDOWN', [
	...defaultTypes,
	'UP_IF_ODD'
]);
