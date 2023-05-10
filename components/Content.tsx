
import SubContent from './SubContent'

interface ContentValue {
  url?:string;
  title?: string;
  description?:string
  id: Number
}

interface ContentProps {
  contents?: ContentValue[];
}



const Content: React.FC<ContentProps> = ({ contents}) => {
  return (
    <div className="h-full ">
      <main className="grid  sm:grid-cols-2 md:grid-cols-3 gap-5 p-8  h-full overflow-y-scroll pt-40 ">
        {contents &&
          contents.map((content, index) => (
            <SubContent key={index} id={content.id} url={content.url} title={content.title} description={content.description} />
          ))}
      </main>
    </div>
  )
}

export default Content
