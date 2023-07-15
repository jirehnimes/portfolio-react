import type { Meta, StoryObj } from '@storybook/react';

import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Title',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

const DEFAULT_CHILDREN = 'Hello World!';

export const Default: Story = {
  args: {
    children: DEFAULT_CHILDREN,
  },
};

export const Size1: Story = {
  args: {
    size: 1,
    children: DEFAULT_CHILDREN,
  },
};

export const Size2: Story = {
  args: {
    size: 2,
    children: DEFAULT_CHILDREN,
  },
};

export const Size3: Story = {
  args: {
    size: 3,
    children: DEFAULT_CHILDREN,
  },
};

export const Size4: Story = {
  args: {
    size: 4,
    children: DEFAULT_CHILDREN,
  },
};

export const Size5: Story = {
  args: {
    size: 5,
    children: DEFAULT_CHILDREN,
  },
};

export const Size6: Story = {
  args: {
    size: 6,
    children: DEFAULT_CHILDREN,
  },
};
