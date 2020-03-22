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
				icon: 'whatshot',
				url: '/contador'
			},
			{
				id: 'redux-hooks-contador',
				title: 'Contador (Redux-Hooks)',
				translate: 'Contador (Redux-Hooks)',
				type: 'item',
				icon: 'whatshot',
				url: '/redux-hooks-contador'
			}
		]
	}
];

export default navigationConfig;
