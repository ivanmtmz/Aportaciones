import React, { useEffect } from 'react';

//REDUX HOOKS
import { useDispatch, useSelector } from 'react-redux';

const Counter = props => {
	//REDUX VARIABLES
	const dispatch = useDispatch();
	const count = useSelector(state => state.redux_hooks_reselect.count);

	useEffect(() => {
		setInterval(() => {
			dispatch({ type: 'INCREMENT_REDUX_HOOKS' });
		}, 500);
	}, [dispatch]);

	return (
		<div>
			<h3>Count: {count}</h3>
		</div>
	);
};

export default Counter;
