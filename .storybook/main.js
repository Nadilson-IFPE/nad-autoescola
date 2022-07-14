module.exports = {
  stories: [
    "../src/stories/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/components/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/styles/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-knobs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
