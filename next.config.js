module.exports = {
  reactStrictMode: true,
	webpack: (config, { isServer, dev }) => {
		if (!isServer) {
			config.node = { fs: 'empty', module: 'empty' };
		}

		return config;
	}
}

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  env: {
    GCLOUD_CREDENTIALS: process.env.GCLOUD_CREDENTIALS,
  },
};
