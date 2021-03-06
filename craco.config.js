const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@model': path.resolve(__dirname, 'src/model/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
    },
  },
};
