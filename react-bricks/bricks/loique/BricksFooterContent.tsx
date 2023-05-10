// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText, plugins} from 'react-bricks/frontend'
const { bold, italic, unorderedList, link, quote } = plugins
interface SubContentProps {
    title?: string;
    list?: string[];
}

const BricksFooterContent: types.Brick<SubContentProps> = ({ title,list, ...rest }) => {
  return <div className='flex px-8 py-4'>
  <div>
    <Text
        propName="title"
        renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
        placeholder="Type a title..."
        // multiline={false} : boolean
        // softLineBreak={false} : boolean
    />
     <RichText
        propName="list"
        renderBlock={({ children }) => (
        <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
        ]}
        renderHighlight={({ children }) => (
            <span className="px-1 rounded bg-blue-200 text-blue-900">
              {children}
            </span>
      )}
                  
     />
  </div>
</div>
}

BricksFooterContent.schema = {
  name: 'footer',
  label: 'Footer',
  getDefaultProps: () => ({
    title: 'Fill the title',
    list:[]
  }),

  sideEditProps: [
  ],
}

export default BricksFooterContent