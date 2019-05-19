import './style.css';

import React from 'react';

export default class Spinner extends React.PureComponent {
	render() {
		return <div className='lds-ellipsis'><div></div><div></div><div></div><div></div></div>;
	}
}