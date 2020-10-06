import React from 'react';

const SRPAppConfig = {
	routes: [
		{
			path: '/srp-no',
			component: React.lazy(() => import('./SRP'))
		}
	]
};

export default SRPAppConfig;
