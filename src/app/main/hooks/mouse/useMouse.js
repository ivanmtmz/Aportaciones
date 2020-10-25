import React from 'react';

const useMouse = () => {
	//Utilizamos la API de Hooks para manejar estados y devolver las
	//coordenadas "x" y "y"
	const [state, setState] = React.useState({ x: 0, y: 0 });
	//Retornamos el state y un callback para cambiar el state
	return [state, evt => setState({ x: evt.clientX, y: evt.clientY })];
};

export default useMouse;
