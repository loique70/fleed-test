import { Image, RichText, Text, types } from 'react-bricks/frontend'
import BricksNavBar from './BricksNavBar'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
 
  title: string
  
}

//=============================
// Component to be rendered
//=============================
const MyComponent: types.Brick<HeroUnitProps> = ({title}) => {
  return (
    <div>
      <div>
       
       {title}
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
MyComponent.schema = {
  name: 'my-hero-unit',
  label: 'Custom Hero Unit',
  previewImageUrl: `/bricks-preview-images/custom-hero-unit.png`,
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  
}

export default MyComponent
