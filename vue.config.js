module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        views: "@/views",
        components: "@/components",
        service: "@/service",
        assets: "@/assets",
      },
    },
  },
  publicPath: "./",
};
