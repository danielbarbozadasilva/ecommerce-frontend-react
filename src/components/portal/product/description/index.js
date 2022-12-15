import { SDescription } from './styled'

const Description = (props) => {

  return (
    <SDescription>
      <div>
        <p>{props.description}</p>
      </div>
    </SDescription>
  )
}

export default Description
