module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
          alias: {
            '@src': './src/',
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@schemas': './src/schemas',
            '@services': './src/services',
            '@store': './src/store',
            '@routes': './src/routes',
            '@resources': './src/resources',
            '@mocks': './src/mocks',
            '@database': './src/database',
          },
        },
      ],
    ],
  };
};
