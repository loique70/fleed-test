// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText, Image, Repeater} from 'react-bricks/frontend'
import { Button } from './Button'


interface NavBarProps {
    title: string,
    bgColor: types.IColor,
    dynamicBgColor?: string;
}

const BricksNavBar: types.Brick<NavBarProps> = (props) => {
  const { title, bgColor } = {
    ...BricksNavBar.schema.getDefaultProps(),
    ...props,
  }
  return(
  
      <nav style={{ backgroundColor: bgColor.color }}>
        <div className={`text-white `}>
            <div className='flex flex-col sm:flex-row items-center justify-between px-8 py-4'>
                <div className='flex flex-col sm:flex-row items-center sm:mr-4'>
                  <p>{title}|</p>
                  <a className='ml-2'>Help Center</a>
                </div>
                <div className='hidden md:flex space-x-4'>
                  <div className=''>
                    <Button label='Submit a request'/>
                  </div>
                  <div>
                    <Button label='Sign In'/>
                  </div>
                </div>
              </div>

              <div className="md:hidden flex justify-end items-center fixed top-0 right-0">
                <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
              </div>
        </div>
        
        <div className='bg-[#dadbf1] p-4'>
          <div className='text-center text-white'>
            <h2 className='text-2xl py-4 text-black'>How can I help you?</h2>
            <input type='search' placeholder='Search' className='border-none rounded-lg shadow-lg mr-5' />
            <Button  label='Search '/>
          </div>
        </div>
        
      </nav>
        
  )
}

BricksNavBar.schema = {
  name: 'navbar',
  label: 'BricksNavBar',
  
  getDefaultProps: () => ({
    title: 'Loique',
    description: 'Lorem ipsum dolor sit amet.',
    hasShadow: true,
    bgColor: { color: '#000', className: 'bg-black' }
  }),
  sideEditProps: [
   
  ],
}

export default BricksNavBar