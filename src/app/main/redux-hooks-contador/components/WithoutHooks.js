//SIN HOOKS!!!!!
import React from 'react';

import { Typography, Button } from '@material-ui/core';
//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//ACTIONS
import * as Actions from './../../../../app/store/actions';

const WithoutHooks = ({ count, increase, decrease }) => {
	return (
		<div className="flex w-full  flex-col">
			<div className="flex justify-center">
				<Typography className="text-32">Contador (Redux HOC): {count}</Typography>
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
const mapStateToProps = ({ count }) => ({
	count
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			increase: Actions.increase,
			decrease: Actions.decrease
		},
		dispatch
	);
export default connect(mapStateToProps, mapDispatchToProps)(WithoutHooks);
