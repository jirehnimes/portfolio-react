import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Icon> = {
  title: 'Common/Icon',
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: faArrowUp,
  },
};
