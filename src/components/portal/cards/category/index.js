import { Card } from 'react-bootstrap'
import { SCardImg, SCard } from './styled'
import { navigate } from '@reach/router'

const CardCategory = (props) => {
  const { id, name, photo } = props.item

  return (
    <div>
      <SCard onClick={() => navigate(`/category/${id}`).then(navigate(0))}>
        {photo ? <SCardImg src={photo} /> : ''}
        <Card.Body>
          <Card.Title>
            <strong>{name}</strong>
          </Card.Title>
        </Card.Body>
      </SCard>
    </div>
  )
}
export default CardCategory
