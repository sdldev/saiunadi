import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Adi Docs',
    social: {
      github: 'https://github.com/sdldev/saiunadi.git'
    },
    sidebar: [{
      label: 'Doc',
      items: [{
        label: 'Start',
        link: '/start/intro/'
      }, {
        label: 'Create doc',
        link: '/start/create/'
      }]
    }, {
      label: 'Network',
      items: [{
        label: 'Index',
        link: '/network/prolog/'
      }, {
        label: 'Definisi',
        link: '/network/definisi/'
      }, {
        label: 'Setting Mikrotik',
        link: '/network/mikrotik/'
      }, {
        label: 'VPN',
        link: '/network/vpn/'
      }, {
        label: 'Monitoring',
        link: '/network/monitoring/'
      }, {
        label: 'Maintanance',
        link: '/network/maintanance/'
      }]
    }]
  })],
  output: "server",
  adapter: cloudflare()
});