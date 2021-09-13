module.exports = {
  // workaround for older version of emotion https://github.com/mui-org/material-ui/issues/24282
  // webpackFinal: async (config) => {
  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve,
  //       alias: {
  //         ...config.resolve.alias,
  //         "@emotion/core": require.resolve("@emotion/react"),
  //         "emotion-theming": require.resolve("@emotion/react"),
  //         "@emotion/styled": require.resolve("@emotion/styled"),
  //       },
  //     },
  //   };
  // },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
