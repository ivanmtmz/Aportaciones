import React from 'react';
import { Typography } from '@material-ui/core';

import { default as ProcesadorDeDatosSinSolid } from './principios/sin-solid/ProcesadorDeDatos';
import { default as ProcesadorDeDatosPRU } from './principios/1 Principio de Responsabilidad Unica/ProcesadorDeDatos';
import { default as ProcesadorDeDatosPSL } from './principios/3 Principio de Sustitucion de Liskov/ProcesadorDeDatos';
import { default as ProcesadorDeDatosPID } from './principios/5 Principio de Inversion de Dependencias/ProcesadorDeDatos';

import FormateadorDeDatosMayusculas from './principios/2 Principio Abierto Cerrado/FormateadorDeDatosMayusculas';
import ImpresoraDeDatosEnCapa from './principios/4 Principio de Segregación de Interfaces/ImpresoraDeDatosEnCapa';

const ComponentPID = () =>
	new ProcesadorDeDatosPID(new FormateadorDeDatosMayusculas(), new ImpresoraDeDatosEnCapa()).procesaDatos(
		'Principios SOLID con JavaScipt'
	);

const SolidApp = () => {
	return (
		<div className="flex h-full justify-center items-center flex-col">
			<div className="flex flex-col">
				<Typography className="flex justify-center text-16 font-bold">Sin SOLID</Typography>
				<Typography className="text-14">
					{new ProcesadorDeDatosSinSolid().procesaDatos('Principios SOLID con JavaScipt')}
				</Typography>
			</div>
			<div className="flex flex-col">
				<Typography className="flex justify-center text-16 font-bold">
					1 Principio de Responsabilidad Única
				</Typography>
				<Typography className="text-14">
					{new ProcesadorDeDatosPRU().procesaDatos('Principios SOLID con JavaScipt')}
				</Typography>
			</div>
			<div className="flex flex-col">
				<Typography className="flex justify-center text-16 font-bold">
					2 Principio de Responsabilidad Única y 3 Principio de Sustitución de Liskov
				</Typography>
				<Typography className="flex text-14">
					{new ProcesadorDeDatosPSL().procesaDatos('Principios SOLID con JavaScipt')}
				</Typography>
				<Typography className="flex text-14">
					{new ProcesadorDeDatosPSL().procesaDatos('Principios SOLID con JavaScipt', 'M')}
				</Typography>
				<Typography className="flex text-14">
					{new ProcesadorDeDatosPSL().procesaDatos('Principios SOLID con JavaScipt', 'm')}
				</Typography>
			</div>
			<div className="flex flex-col">
				<Typography className="flex justify-center text-16 font-bold">
					4 Principio de Segregación de Interfaces y 5 Principio de Inversion de Dependencias
				</Typography>
				<Typography className="flex text-14">
					<ComponentPID />
				</Typography>
			</div>
		</div>
	);
};

export default SolidApp;
