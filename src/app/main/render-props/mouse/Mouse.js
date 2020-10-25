import React from 'react';

const RenderPropsMousesApp = props => {
	//Aprovechamos el uso de hooks aunque pudiesemos usar un componente clase
	const [state, setState] = React.useState({ x: 0, y: 0 });

	//Callback que se llama al moverse el mouse
	const handleMouseMove = evt => setState({ x: evt.clientX, y: evt.clientY });

	return (
		<div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
			{/* Retornamos un callback con el state como propiedad */}
			{props.children(state)}
		</div>
	);
};

export default RenderPropsMousesApp;
