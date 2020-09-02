import React, { useRef } from 'react';

//COMPONENT HELLO
const Hello = React.memo(({ increment }) => {
	console.log('render');
	return <button onClick={() => increment(5)}>Soy un botón</button>;
});

export default Hello;
