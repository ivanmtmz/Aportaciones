import React from 'react';

const ThrottleExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/throttle-example',
			component: React.lazy(() => import('./ThrottleExample'))
		}
	]
};

export default ThrottleExampleConfig;
