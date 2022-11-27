import { Card } from 'react-bootstrap'
import { SCardImg, SCard, SButton } from './styled'
import { navigate } from '@reach/router'

const CardProduct = (props) => {
  const { title, description, finalPrice, price, photos } = props.item
  return (
    <div>
      <SCard>
        {photos?.length > 0 ? <SCardImg src={photos[0]} /> : ''}
        <Card.Body>
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
          <Card.Text>
            <strong>Descrição:</strong> {description}
          </Card.Text>
          <Card.Text>
            <strong>Preço:</strong> {price}
          </Card.Text>
          <Card.Text>
            <strong>Por:</strong> {finalPrice}
          </Card.Text>
          <SButton onClick={() => navigate(`/signin`)}>Adquirir</SButton>
        </Card.Body>
      </SCard>
    </div>
  )
}
export default CardProduct
