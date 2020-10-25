import React from 'react';

//HOOKS
import useMouse from './useMouse';

//COMPONENTS
import Cat from './Cat';

const HooksMouseApp = () => {
	//Usando destructuring accedemos a lo que retorna el custom hook
	const [mouse, handleMouseMove] = useMouse();

	//Aplicamos la funcionalidad a nuestro componente
	return (
		<div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
			<Cat mouse={mouse}></Cat>
		</div>
	);
};

export default HooksMouseApp;
