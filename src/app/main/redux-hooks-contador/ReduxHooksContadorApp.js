//MANDA A LLAMAR A LOS DOS CONTADORES

import React from 'react';

//COMPONENTS
import WithoutHooks from './components/WithoutHooks';
import WithHooks from './components/WithHooks';

const ReduxHooksContadorApp = props => {
	return (
		<div className="flex flex-col">
			<WithoutHooks />
			<WithHooks />
		</div>
	);
};

export default ReduxHooksContadorApp;
