import React from 'react';

//MATERIAL UI
import { Typography, Button } from '@material-ui/core';

//HOC
import CounterHOC from '../hocs/CounterHOC';

const ExampleCounterHOC = props => {
	/*
    ACCEDEMOS A LA VARIABLE COUNT
    A LAS FUNCIONES DE INCREMENTAR Y 
    DECREMENTAR MEDIANTE DESTRUCTURING
    GRACIAS AL HOC
  */
	const { count, increase, decrease } = props;

	/* 
    CREAMOS EL COMPONENTE
  */
	return (
		<div className="flex w-full  flex-col">
			<div className="flex justify-center">
				<Typography className="text-32">Contador (HOC): {count}</Typography>
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
	);
};

export default CounterHOC(ExampleCounterHOC);
