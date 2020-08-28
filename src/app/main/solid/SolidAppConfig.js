import React from 'react';

const SolidAppConfig = {
	routes: [
		{
			path: '/solid',
			component: React.lazy(() => import('./SolidApp'))
		}
	]
};

export default SolidAppConfig;
