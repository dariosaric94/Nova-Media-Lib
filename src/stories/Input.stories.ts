import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Placeholder',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Placeholder',
    variant: 'standard',
  },
};
