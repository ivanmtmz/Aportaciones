import React from 'react';

const ReduxHooksContadorAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/redux-hooks-contador',
			component: React.lazy(() => import('./ReduxHooksContadorApp'))
		}
	]
};

export default ReduxHooksContadorAppConfig;
