/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
  },
  devOptions: {
    port: 8000,
  },
  plugins: [
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
