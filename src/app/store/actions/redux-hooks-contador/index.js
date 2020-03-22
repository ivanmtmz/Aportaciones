//ACTIONS !!!

export const INCREASE = 'INCREASE_CONTADOR';
export const DECREASE = 'DECREASE_CONTADOR';

export const increase = () => dispatch =>
	dispatch({
		type: INCREASE
	});

export const decrease = () => dispatch =>
	dispatch({
		type: DECREASE
	});
