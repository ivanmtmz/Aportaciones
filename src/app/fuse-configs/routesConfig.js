import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import { ContadorAppConfig } from './../main/contador/ContadorAppConfig';
import ReduxHooksContadorAppConfig from './../main/redux-hooks-contador/ReduxHooksContadorAppConfig';

const routeConfigs = [ContadorAppConfig, ReduxHooksContadorAppConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/contador" />
	}
];

export default routes;
