import type { Meta, StoryObj } from '@storybook/react';

import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Common/Title',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

const DEFAULT_CHILDREN = 'Hello World!';

export const Default: Story = {
  decorators: [
    () => (
      <>
        {Array.from(Array(7).keys()).map((count: number) => (
          <>
            <p>{count === 0 ? 'Default' : `Size ${count}`}</p>
            <Title size={count === 0 ? undefined : count}>
              {DEFAULT_CHILDREN}
            </Title>
            <br />
          </>
        ))}
      </>
    ),
  ],
};

export const Subtitle: Story = {
  decorators: [
    () => (
      <>
        {Array.from(Array(7).keys()).map((count: number) => (
          <>
            <p>{count === 0 ? 'Default' : `Size ${count}`}</p>
            <Title
              size={count === 0 ? undefined : count}
              subtitle
            >
              {DEFAULT_CHILDREN}
            </Title>
            <br />
          </>
        ))}
      </>
    ),
  ],
};
