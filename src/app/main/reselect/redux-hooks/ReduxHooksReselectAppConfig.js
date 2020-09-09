import React from 'react';

const ReduxHooksReselectAppConfig = {
	routes: [
		{
			path: '/reselect/redux-hooks',
			component: React.lazy(() => import('./ReduxHooksReselectApp'))
		}
	]
};

export default ReduxHooksReselectAppConfig;
