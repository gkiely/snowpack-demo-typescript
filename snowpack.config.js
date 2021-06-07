/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  buildOptions: {
    sourcemap: true,
  },
  devOptions: {
    open: 'none',
    port: 8000,
  },
  mount: {
    src: '/',
  },
  plugins: [
    'snowpack-plugin-react-html-attrs',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-optimize',
      {
        preloadCSS: true,
      },
    ],
    'snowpack-plugin-skypack-replacer',
  ],
  // packageOptions: {
  //   source: 'remote',
  //   types: true,
  // },
};
