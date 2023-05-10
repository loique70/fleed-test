import type { Meta, StoryObj } from '@storybook/react';
import  NavBar  from '../components/NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'NavBar',
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const title: Story = {
    args:{
        title: 'Loiquee',
        dynamicBgColor: '#000'
    }
}


