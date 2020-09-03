import React, { useRef } from 'react';
import { Button } from '@material-ui/core';

//COMPONENT HELLO
const Hello = React.memo(({ increment }) => {
	const renders = useRef(0);
	return (
		<div className="flex justify-center flex-col">
			<div>Renders: {renders.current++}</div>
			<Button color="primary" variant="contained" onClick={() => increment(5)}>
				Soy un botón
			</Button>
		</div>
	);
});

export default Hello;
