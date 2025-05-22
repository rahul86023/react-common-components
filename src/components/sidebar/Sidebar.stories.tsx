import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  args: {
    items: ['Item 1', 'Item 2'],
    backgroundColor: '#ddd',
  },
};

