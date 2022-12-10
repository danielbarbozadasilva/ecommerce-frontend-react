import { Card } from 'react-bootstrap'
import { SCardImg, SCard, SButton, SCardPromotion, SCardPrice } from './styled'
import { navigate } from '@reach/router'
import { formatPriceBr } from '../../../../util/helpers/format-price'

const CardProduct = (props) => {
  const { title, description, promotion, price, photos } = props.item
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

          {promotion < price ? (
            <>
              <SCardPrice>
                <strong>De:</strong> {formatPriceBr(price)}
              </SCardPrice>
              <SCardPromotion>
                <strong>Por:</strong> {formatPriceBr(promotion)}
              </SCardPromotion>
            </>
          ) : (
            <>
              <SCardPrice>
                <strong>Preço:</strong> {formatPriceBr(price)}
              </SCardPrice>
            </>
          )}
          <SButton onClick={() => navigate(`/signin`)}>Adquirir</SButton>
        </Card.Body>
      </SCard>
    </div>
  )
}
export default CardProduct
