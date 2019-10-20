// vue.config.js
module.exports = {
  publicPath: "/vue-app1/",
  filenameHashing: false,
  chainWebpack: config => {
    // config.externals(["vue", "vue-router"]);
  }
};
