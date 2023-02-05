import React from 'react'
import { Link } from '@material-ui/core'
import { formatPriceBr } from '../../../../util/helpers/format'
import { navigate } from '@reach/router'
import {
  SContainer,
  SImageStyle,
  MainPhoto,
  SmallPhoto,
  ProductDetails,
  DisplayQuantity,
  SInputQuantity,
  SButton,
  SDescriptionPrice,
  SDescriptionPromotion,
  SDescriptionInstallments
} from './styled'
import { addCartProduct } from '~/store/cart/cart.action'
import { useDispatch } from 'react-redux'

const Hero = (props) => {
  const [selectedPhoto, setSelectedPhoto] = React.useState()
  const [quantity, setQuantity] = React.useState(1)
  const dispatch = useDispatch()
  const {
    id,
    title,
    photos,
    availability,
    price,
    promotion,
    category,
    categoryName
  } = props.data

  const AddProductsCart = () => {
    const data = {
      title: title,
      photos: photos,
      product: id,
      quantity: quantity,
      price: promotion < price ? promotion : price
    }
    dispatch(addCartProduct(data)).then(navigate('/cart'))
  }

  return (
    <>
      <SContainer>
        <SImageStyle>
          <MainPhoto>
            {photos?.length > 0 ? (
              <img src={selectedPhoto || photos[0]} width="65%" />
            ) : (
              ''
            )}
          </MainPhoto>
          {photos?.map((data, index) => (
            <SmallPhoto key={index} onClick={() => setSelectedPhoto(data)}>
              <img src={data} width="10%" />
            </SmallPhoto>
          ))}
        </SImageStyle>
        <ProductDetails>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <p>
              Categoria:&nbsp;
              <Link href={`/category/${category}`}>
                <span>{categoryName}</span>
              </Link>
            </p>
          </div>
          <br />
          {availability ? (
            <>
              <SDescriptionPrice>
                <strong>De:</strong> {formatPriceBr(price)}
              </SDescriptionPrice>

              <SDescriptionPromotion>
                <strong>Por:</strong> {formatPriceBr(promotion)}
              </SDescriptionPromotion>

              <SDescriptionInstallments>
                ou 6x de {formatPriceBr(promotion / 6)} sem juros
              </SDescriptionInstallments>
            </>
          ) : (
            <div>
              <h2>{formatPriceBr(price)}</h2>
              {promotion && promotion !== price && (
                <h2>{formatPriceBr(promotion)}</h2>
              )}
              <h4>
                ou em 6x de {formatPriceBr((promotion || price) / 6)}
                &nbsp;sem juros
              </h4>
            </div>
          )}
          <br />
          <div>
            <DisplayQuantity>
              <label>Quantidade:</label>
              <SInputQuantity
                autoFocus
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) =>
                  Number(e.target.value) >= 1 && setQuantity(e.target.value)
                }
              />
            </DisplayQuantity>
          </div>
          <div>
            <SButton onClick={() => AddProductsCart()}>COMPRAR</SButton>
          </div>
        </ProductDetails>
      </SContainer>
    </>
  )
}

export default Hero
