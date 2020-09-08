import React from 'react';

const ReduxHocReselectAppConfig = {
	routes: [
		{
			path: '/reselect/redux-hoc',
			component: React.lazy(() => import('./ReduxHocReselectApp'))
		}
	]
};

export default ReduxHocReselectAppConfig;
