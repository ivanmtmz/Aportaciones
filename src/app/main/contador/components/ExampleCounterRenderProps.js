import React from 'react';

//MATERIAL UI
import { Typography, Button } from '@material-ui/core';

//RENDER PROPS
import CounterRenderProps from '../renderprops/CounterRenderProps';

const ExampleCounterRenderProps = props => {
	const { initCounter } = props;

	/**
	 * Se manda a llamar el componente y se pasa un parámetro inicial
	 * comp propiedad
	 */
	return (
		<CounterRenderProps initCounter={initCounter}>
			{/* Dentro del "children" del componente se manda a llamar al callback*/}
			{({ count, increase, decrease }) => (
				//Se retorna el UI a utilizar con el valor del contador y las
				//operaciones increase y decrease
				<div className="flex w-full  flex-col">
					<div className="flex justify-center">
						<Typography className="text-32">Contador (Render Props): {count}</Typography>
					</div>

					<div className="flex justify-center">
						<Button color="primary" variant="contained" onClick={increase} className="mx-16">
							Incrementar
						</Button>
						<Button color="secondary" variant="contained" onClick={decrease} className="mx-16">
							Decrementar
						</Button>
					</div>
				</div>
			)}
		</CounterRenderProps>
	);
};

export default ExampleCounterRenderProps;
