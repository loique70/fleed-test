
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

interface FooterLink {
    title: string;
    links: string[];
  }
  
  interface FooterProps {
    links?: FooterLink[];
    copy: string;
  }

const copy = 'Copyright 2023 all right reserved '
const BricksFooter: types.Brick<FooterProps> = ({ copy}) => {
  return (
    <main className='bg-[#000] text-white p-4 fixed bottom-0 w-full'>
        <h1>Footer</h1>
      <div className="grid grid-cols-4 gap-5">
        <Repeater propName="footers" />
      </div>
      
      <div>
        <p>{copy}</p>
      </div>
    </main>
  )
}

BricksFooter.schema = {
  name: 'my footer',
  label: 'BricksContent',
  getDefaultProps: () => ({
    
  }),
  repeaterItems: [
    {
      name: 'footers',
      itemType: 'footer',
      itemLabel: 'Footer',
      max: 6,
    },
  ],
}

export default BricksFooter
