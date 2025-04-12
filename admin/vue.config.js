const { defineConfig } = require('@vue/cli-service')
const { escconfig } = require('@/config/esc.config');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/adminapi': {
        target: `http://${escconfig.serverHost}:${escconfig.serverPort}`,
        changeOrigin: true,
      },
    },
  },  
})
