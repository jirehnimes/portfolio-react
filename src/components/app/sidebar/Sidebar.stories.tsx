import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'App/Sidebar',
  component: Sidebar,
};

export default meta;

// const DEFAULT_CHILDREN = 'Hello World!';

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
