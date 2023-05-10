import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/Footer';

interface FooterLink {
  title: string;
  links: string[];
}

interface FooterProps {
  links?: FooterLink[];
  copy: string;
}

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const footer: Story = {
    args: {
        links: [
            {
              title: 'Abstract',
              links: ['Start Trial', 'Pricing', 'Download'],
            },
            {
              title: 'Resources ',
              links: ['Blog', 'Help Center', 'Release Notes','Status'],
            },
            {
              title: 'Community',
              links: ['Twitter', 'LinkedIn', 'Facebook','Dribble','Podcast'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Careers', 'Legal','Dribble'],
            },
        ],
        copy: '© 2023 Abstract Studio Design, Inc. All rights reserved.',
    },
  };

 
