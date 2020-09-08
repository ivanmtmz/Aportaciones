import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import { ContadorAppConfig } from './../main/contador/ContadorAppConfig';
import ReduxHooksContadorAppConfig from './../main/redux-hooks-contador/ReduxHooksContadorAppConfig';
import SolidAppConfig from './../main/solid/SolidAppConfig';
import DebounceExampleConfig from './../main/debounce-example/DebounceExampleConfig';
import ThrottleExampleConfig from './../main/throttle-example/ThrottleExampleConfig';
import UseCallbackAppConfig from './../main/useCallback/UseCallbackAppConfig';
import ReduxHocReselectAppConfig from './../main/reselect/redux-hoc/ReduxHocReselectAppConfig';

const routeConfigs = [
	ContadorAppConfig,
	ReduxHooksContadorAppConfig,
	SolidAppConfig,
	DebounceExampleConfig,
	ThrottleExampleConfig,
	UseCallbackAppConfig,
	ReduxHocReselectAppConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/contador" />
	}
];

export default routes;
