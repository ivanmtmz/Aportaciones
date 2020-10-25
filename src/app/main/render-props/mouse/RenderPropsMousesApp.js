import React from 'react';

//RENDER PROPS
import Mouse from './Mouse';

//COMPONENTS
import Cat from './Cat';

const RenderPropsMousesApp = () => {
	/*
		Llamamos a Mouse y como children
		renderizamos nuestro componente Cat
	*/
	return <Mouse>{mouse => <Cat mouse={mouse} />}</Mouse>;
};

export default RenderPropsMousesApp;
