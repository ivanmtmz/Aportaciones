import React from 'react';

const HooksMouseAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/hooks/mouse',
			component: React.lazy(() => import('./HooksMouseApp'))
		}
	]
};

export default HooksMouseAppConfig;
