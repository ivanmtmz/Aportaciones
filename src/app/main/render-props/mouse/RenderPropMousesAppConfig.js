import React from 'react';

const RenderPropMousesAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/render-props/mouse',
			component: React.lazy(() => import('./RenderPropsMousesApp'))
		}
	]
};

export default RenderPropMousesAppConfig;
