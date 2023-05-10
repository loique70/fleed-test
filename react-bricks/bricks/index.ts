import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import MyComponent from './loique/MyComponent'
import SubContent from './loique/BricksSubContent'
import Content from './loique/BricksContent'
import BricksNavBar from './loique/BricksNavBar'
import BricksFooter from './loique/BricksFooter'
import BricksFooterContent from './loique/BricksFooterContent'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
      {
        categoryName:'Loique Custom Bricks',
        bricks:[SubContent]
      },
      {
        categoryName:'Loique Custom Gallery Bricks',
        bricks:[Content]
      },
      {
        categoryName:'Navigation Bar',
        bricks:[BricksNavBar]
      },
      {
        categoryName:'The Footer',
        bricks:[BricksFooter]
      },
      {
        categoryName:'Footer content',
        bricks:[BricksFooterContent]
      }
    ],
  },
]

export default bricks
