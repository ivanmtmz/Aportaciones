import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'contador',
				title: 'Contador',
				translate: 'Contador',
				type: 'item',
				icon: 'repeat_one',
				url: '/contador'
			},
			{
				id: 'redux-hooks-contador',
				title: 'Contador (Redux-Hooks)',
				translate: 'Contador (Redux-Hooks)',
				type: 'item',
				icon: 'plus_one',
				url: '/redux-hooks-contador'
			},
			{
				id: 'solid',
				title: 'SOLID',
				type: 'item',
				icon: 'live_help',
				url: '/solid'
			},
			{
				id: 'solid-2',
				title: 'Solid 2',
				type: 'collapse',
				icon: 'grain',
				children: [
					{
						id: 'solid-srp',
						title: 'SRP No aplica',
						type: 'collapse',
						icon: 'exposure_plus_1',
						children: [{ id: 'solid-srp', title: 'SRP', type: 'item', icon: 'adjust', url: '/srp-no' }]
					}
				]
			},
			{
				id: 'debounce-example',
				title: 'Debounce',
				type: 'item',
				icon: '360',
				url: '/debounce-example'
			},
			{
				id: 'throttle-example',
				title: 'Throttle',
				type: 'item',
				icon: '3d_rotation',
				url: '/throttle-example'
			},
			{
				id: 'useCallback-example',
				title: 'useCallback',
				type: 'item',
				icon: '3d_rotation',
				url: '/useCallback-example'
			},
			{
				id: 'redux-reselect',
				title: 'Redux Reselect',
				type: 'collapse',
				children: [
					{
						id: 'redux-reselect-hoc',
						title: 'HOC',
						type: 'item',
						icon: 'adjust',
						url: '/reselect/redux-hoc'
					},
					{
						id: 'redux-reselect-hooks',
						title: 'Hooks',
						type: 'item',
						icon: 'adjust',
						url: '/reselect/redux-hooks'
					}
				]
			},
			{
				id: 'render-props',
				title: 'Render Props',
				type: 'collapse',
				children: [
					{
						id: 'render-props-mouse',
						title: 'Mouse',
						type: 'item',
						icon: 'adjust',
						url: '/render-props/mouse'
					}
				]
			}
		]
	}
];

export default navigationConfig;
