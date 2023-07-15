import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*.stories.@(ts|tsx)',
  ],
  staticDirs: [
    '../public',
  ],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
    };

    return config;
  }
};
export default config;
