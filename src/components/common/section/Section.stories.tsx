import type { Meta, StoryObj } from '@storybook/react';

import Section from './Section';

const meta: Meta<typeof Section> = {
  title: 'Common/Section',
  component: Section,
};

export default meta;

type Story = StoryObj<typeof Section>;

const SampleChild = <h1>Hello World!</h1>;

export const Default: Story = {
  args: {
    children: SampleChild,
  },
};

export const Above: Story = {
  args: {
    above: true,
    children: SampleChild,
  },
};
