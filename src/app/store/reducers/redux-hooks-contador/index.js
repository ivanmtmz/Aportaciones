// REDUCER !!!

import * as Actions from './../../actions';

const initialState = 0;

const contador = (state = initialState, action) => {
	switch (action.type) {
		case Actions.INCREASE:
			return state + 1;
		case Actions.DECREASE:
			return state - 1;
		default: {
			return state;
		}
	}
};

export default contador;
