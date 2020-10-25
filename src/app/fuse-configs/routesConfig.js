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
import ReduxHooksReselectAppConfig from './../main/reselect/redux-hooks/ReduxHooksReselectAppConfig';
import Solid2AppConfig from './../main/solid-2/solidAppConfigs';
import RenderPropMousesAppConfig from './../main/render-props/mouse/RenderPropMousesAppConfig';
import HooksMouseAppConfig from './../main/hooks/mouse/HooksMouseAppConfig';

const routeConfigs = [
	ContadorAppConfig,
	ReduxHooksContadorAppConfig,
	SolidAppConfig,
	DebounceExampleConfig,
	ThrottleExampleConfig,
	UseCallbackAppConfig,
	ReduxHocReselectAppConfig,
	ReduxHooksReselectAppConfig,
	RenderPropMousesAppConfig,
	HooksMouseAppConfig,
	...Solid2AppConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/contador" />
	}
];

export default routes;
