module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Polyfill for dependencies
        webpackConfig.resolve.fallback = {
            buffer: require.resolve("buffer/"),
            util: require.resolve("util/"),
            stream: require.resolve("stream-browserify"),
            path: require.resolve("path-browserify"),
            fs: require.resolve("browserify-fs")
        };
  
        // Add the 'module' configuration for handling .wasm files
        webpackConfig.module.rules.push({
          test: /\.wasm$/,
          type: 'javascript/auto',
        });
  
        return webpackConfig;
      },
    },
  };
  