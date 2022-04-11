module.exports = {
  devServer: {
    port: 4001,
    proxy: 'http://localhost:4001',
  },
  transpileDependencies: [
    /@kongponents\/.*/,
  ]
}
