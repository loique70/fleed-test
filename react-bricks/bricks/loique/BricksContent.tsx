
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

const BricksContent: types.Brick = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center">Content</h1>
      <div className="sm:grid grid-cols-3 gap-5">
        <Repeater propName="contents" />
      </div>
    </div>
  )
}

BricksContent.schema = {
  name: 'my content',
  label: 'BricksContent',
  getDefaultProps: () => ({
    contents: [],
  }),
  repeaterItems: [
    {
      name: 'contents',
      itemType: 'content',
      itemLabel: 'Content',
      max: 6,
    },
  ],
}

export default BricksContent
