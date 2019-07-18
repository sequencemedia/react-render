module.exports = {
  compact: true,
  comments: false,
  presets: [
    [
      '@babel/env', {
        useBuiltIns: 'usage',
        targets: {
          node: 'current'
        },
        corejs: '3'
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from'
  ]
}
