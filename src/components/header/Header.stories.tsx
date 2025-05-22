import Header from './Header';
import type { Meta, StoryObj } from '@storybook/react';
import type { HeaderProps } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    title: 'My Header',
    backgroundColor: '#ffcc00',
  },
};

// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import Header from './Header';

// export default {
//   title: 'Components/Header',
//   component: Header,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//     title: { control: 'text' },
//   },
// } as ComponentMeta<typeof Header>;

// const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   title: 'Default Header',
//   backgroundColor: '#f5f5f5',
// };

// export const Custom = Template.bind({});
// Custom.args = {
//   title: 'Welcome!',
//   backgroundColor: '#add8e6',
// };
