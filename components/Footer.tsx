import React from 'react';
import FooterContent from './FooterContent';

interface FooterLink {
  title: string;
  links: string[];
}

interface FooterProps {
  links?: FooterLink[];
  copy: string;
}

const Footer: React.FC<FooterProps> = ({ links, copy }) => {
  return (
    <main className='bg-[#000] text-white p-2   w-full'>
      <div className='grid grid-cols-4 mb-4'>
        {links &&
          links.map((link, index) => (
            <FooterContent key={index} title={link.title} list={link.links} />
          ))}
      </div>
      <div>
        <p>{copy}</p>
      </div>
    </main>
  );
};

export default Footer;
