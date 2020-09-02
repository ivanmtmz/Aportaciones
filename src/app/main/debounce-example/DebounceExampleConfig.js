import React from 'react';

const DebounceExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/debounce-example',
			component: React.lazy(() => import('./DebounceExample'))
		}
	]
};

export default DebounceExampleConfig;
