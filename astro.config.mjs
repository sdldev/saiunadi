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
    }, 
    {
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
    }
    , 
    {
      label: 'Linux',
      items: [
        {
        label: 'Prolog',
        link: '/linux/prolog/'
      }, 
      {
        label: 'CLI Linux',
        link: '/linux/cli/'
      }, 
      {
        label: 'Database',
        link: '/linux/database/'
      }, 
      {
        label: 'Monitor',
        link: '/linux/monitor/'
      }
      , 
      {
        label: 'Hardening',
        link: '/linux/hardening/'
      }
    ]
    }]
  })],
  site: "https://saiunadi.my.id",
  output: "hybrid",
  adapter: cloudflare()
});