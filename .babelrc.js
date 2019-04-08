'use strict';

module.exports = {
  presets: [
    [require.resolve('@babel/preset-env'), { targets: { node: 'current' } }],
    [require.resolve('@babel/preset-flow')],
  ],
  plugins: [
    [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true, }],
    [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true, }],
    [require.resolve('babel-plugin-module-resolver'), {
      root: ['./src'],
      alias: {
        test: './test',
        '@': './src',
      },
    }],
  ],
};
