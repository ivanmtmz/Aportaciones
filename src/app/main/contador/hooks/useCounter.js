//MANEJO DE ESTADOS
import { useState } from 'react';

//VALOR INICIAL DEL CONTADOR
const useCounter = initCount => {
	/*
		SE UTILIZA EL API USESTATE DE REACT
		PARA EL MANEJO DE ESTADOS
	*/
	const [count, setCount] = useState(initCount);

	//MÉTODO PARA INCREMENTAR EL CONTADOR
	const increase = () => setCount(count + 1);
	//MÉTODO PARA DECREMENTAR EL CONTADOR
	const decrease = () => setCount(count - 1);

	//SE RETORNA EN UN ARREGLO LAS FUNCIONALIDADES
	return [count, increase, decrease];
};

export default useCounter;
