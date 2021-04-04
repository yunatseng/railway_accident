module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/railway_accident/'
    : '/',
};
