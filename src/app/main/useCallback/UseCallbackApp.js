import React, { useState } from 'react';
import Hello from './Hello';
import { Typography } from '@material-ui/core';

const UseCallbackApp = () => {
	const [count, setCount] = useState(0);

	const increment = React.useCallback(
		n => {
			setCount(c => n + c);
		},
		[setCount]
	);

	return (
		<div className="flex flex-col h-full justify-center items-center">
			<Hello increment={increment} />
			<Typography className="m-8">Count: {count}</Typography>
		</div>
	);
};

export default UseCallbackApp;
