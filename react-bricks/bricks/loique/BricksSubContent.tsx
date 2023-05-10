
import React from 'react'
import { types, Text, RichText, Image,plugins} from 'react-bricks/frontend'


interface SubContentProps {
    hasShadow: boolean,
    bgColor: types.IColor
}

const  BricksSubContent: types.Brick<SubContentProps> = ({ hasShadow,bgColor, ...rest }) => {
  return <div {...rest}
  className={`my-6 p-6 text-center border rounded-lg ${
    hasShadow ? 'shadow-xl' : ''
  } ${bgColor.className}`}
         >
             <Image
                propName="image"  
                alt="Fallback alt tag"
                maxWidth={200}
                imageClassName="mb-6"   
                renderWrapper={({children, width, height}) => (
                <div className="wrapper">
                    {children}
                </div>
             )}
            />

             <Text
                propName="title"
                renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
                placeholder="Type a title..."
                // multiline={false} : boolean
                // softLineBreak={false} : boolean
              />
              <RichText
                propName="description"
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
}

BricksSubContent.schema = {
  name: 'content',
  label: 'Content',
  getDefaultProps: () => ({
    title: 'Fill the title',
    description: 'Write your description Here..',
    hasShadow: true,
    bgColor: { color: '#ffffff', className: 'bg-white' }
  }),

  sideEditProps: [
    {
        name: 'hasShadow',
        label: 'Shadow',
        type: types.SideEditPropType.Boolean,
    },
    {
        name: 'bgColor',
        label: 'Background',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Color,
          options: [
            {
              label: 'White',
              value: { color: '#ffffff', className: 'bg-white' },
            },
            {
              label: 'Light blue',
              value: { color: '#eff6ff', className: 'bg-blue-50' },
            },
          ],
        },
    },
  ],
}

export default BricksSubContent