import type { Meta, StoryObj } from '@storybook/react';
import  Content  from '../components/Content';

interface ContentValue {
  id:Number,
  url?:string;
  title?: string;
  description?:string
}

interface ContentProps {
  contents?: ContentValue[];
}

const meta: Meta<typeof Content> = {
  title: 'Content',
  component: Content,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Content>;

export const title: Story = {
    args:{
       contents:[
        {id:1,
          url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
          title:'Les trois fantastique',
          description:`Functions to convert NetworkX graphs to and from other formats.`
        },

        {
          id:2,
          url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
          title:'Les trois fantastique',
          description:`Functions to convert NetworkX graphs to and from other formats.`        },

        {
          id:3,
          url:'https://images.unsplash.com/photo-1682448229309-1dfb66458a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
          title:'Les trois fantastique',
          description:`Functions to convert NetworkX graphs to and from other formats.
          The preferred way of converting data to a NetworkX graph is through the graph constructor. The constructor calls the to_networkx_graph() function which attempts to guess the input type and convert it automatically.`
        }
       ]
        // url:'https://images.unsplash.com/photo-1682406826663-1b26f0483be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    }
}


