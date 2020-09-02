import React, { useState } from 'react';
import Hello from './Hello';

const UseCallbackApp = () => {
	const [count, setCount] = useState(0);

	const increment = React.useCallback(
		n => {
			setCount(c => n + c);
		},
		[setCount]
	);

	return (
		<div>
			<Hello increment={increment} />
			<div>Count: {count}</div>
		</div>
	);
};

export default UseCallbackApp;
