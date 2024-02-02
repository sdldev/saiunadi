import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://santrimu.com',
			},
			sidebar: [
				{
					label: 'Doc',
					items: [
						{ label: 'Start', link: '/start/intro/' },
						{ label: 'Create doc', link: '/start/create/' },

					],
				},

				{
					label: 'Network',
					items: [
						{ label: 'Index', link: '/network/prolog/' },
						{ label: 'Definisi', link: '/network/definisi/' },
					],
				},
			],
		}),
	],
});
