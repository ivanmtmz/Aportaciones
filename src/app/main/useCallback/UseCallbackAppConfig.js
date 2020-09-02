import React from 'react';

const UseCallbackConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/useCallback-example',
			component: React.lazy(() => import('./UseCallbackApp'))
		}
	]
};

export default UseCallbackConfig;
