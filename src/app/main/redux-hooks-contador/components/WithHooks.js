// CON HOOKS !!!!
import React from 'react';
import { Typography, Button } from '@material-ui/core';
//HOOKS
import { useDispatch, useSelector } from 'react-redux';

//ACTIONS
import * as Actions from './../../../../app/store/actions';

const WithHooks = () => {
	const dispatch = useDispatch(); //Manda a llamar el dispatch para accionar eventos
	const count = useSelector(({ count }) => count); //Manda a llamar al state para obtener una variable
	return (
		<div className="flex w-full  flex-col">
			<div className="flex justify-center">
				<Typography className="text-32">Contador (Redux Hooks): {count}</Typography>
			</div>

			<div className="flex justify-center">
				<Button
					color="primary"
					variant="contained"
					onClick={() => dispatch(Actions.increase())}
					className="mx-16"
				>
					Incrementar
				</Button>
				<Button
					color="secondary"
					variant="contained"
					onClick={() => dispatch(Actions.decrease())}
					className="mx-16"
				>
					Decrementar
				</Button>
			</div>
		</div>
	);
};

export default WithHooks;
