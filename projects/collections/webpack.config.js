const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "collections"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "collections",
        filename: "remoteEntry.js",
        exposes: {
            './Grids': './projects/collections/src/application/grids/grids.module.ts',
        },

        // For hosts (please adjust)
        // remotes: {
        //     "themoviedb-microfrontend": "themoviedb-microfrontend@http://localhost:4200/remoteEntry.js",
        //     "details": "details@http://localhost:4200/remoteEntry.js",
        //     "favorites": "favorites@http://localhost:4200/remoteEntry.js",
        //     "shell": "shell@http://localhost:5000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin(),
  ],
};
