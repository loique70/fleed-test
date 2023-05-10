import React from 'react';

interface FooterProps {
  title?: string;
  list?: string[];
}

const FooterContent: React.FC<FooterProps> = ({ title = 'Abstract', list }) => {
  return (
    <div className='flex px-2 py-2'>
      <div>
        <h3>{title}</h3>
        {list && list.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
};

export default FooterContent;
