/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase*/
const flow = require('lodash.flow');
const withManifest = require('next-manifest');
const withOffline = require('next-offline');
require('dotenv').config();

const exportPathMap = async function() {
  return {
    '/': {
      page: '/',
      query: {}
    }
  };
};

const env = {
  DYNAMIC_CONTENT_REFERENCE_ID: process.env.DYNAMIC_CONTENT_REFERENCE_ID,
  DYNAMIC_CONTENT_ACCOUNT_NAME: process.env.DYNAMIC_CONTENT_ACCOUNT_NAME,
  DYNAMIC_CONTENT_BASE_URL: process.env.DYNAMIC_CONTENT_BASE_URL
};

const manifest = {
  name: 'Amplience Development',
  short_name: 'Amplience',
  theme_color: '#29333f',
  background_color: '#29333f',
  display: 'standalone',
  orientation: 'portrait',
  Scope: '/',
  start_url: '/',
  cache: true,
  icons: [
    {
      src: '/static/icons/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ],
  splash_pages: null
};

const plugins = flow([withManifest, withOffline]);

module.exports = plugins({
  env,
  exportPathMap,
  manifest
});
