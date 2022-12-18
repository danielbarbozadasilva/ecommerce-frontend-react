import React from 'react'
import { formatPriceBr } from '../../../util/helpers/format'
import { removeCart, updateCartQuantity } from '../../../util/cart'
import { TextTitle, CartBody, CartData, SInputQuantity, SImage } from './styled'
import { navigate } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { listByIdProduct } from '~/store/product/product.action'
import { getCartProducts } from '~/store/cart/cart.action'

const CartProduct = ({ item }) => {
  const { title, product, price, photos } = item
  const productById = useSelector((state) => state.product.productById)
  const [quantityProd, setQuantityProd] = React.useState(1)
  const dispatch = useDispatch()

  const changeQuantity = async (e) => {
    dispatch(listByIdProduct(product))
    if (e.target.value > 0) {
      if (Number(e.target.value) > productById.quantity) {
        return alert('Quantidade indisponivel no estoque.')
      }
      setQuantityProd(e.target.value)
      updateCartQuantity(product, e.target.value)
      dispatch(getCartProducts())
    }
  }

  const removeProductCart = (key) => {
    if (window.confirm('Você deseja realmente remover esse produto?')) {
      removeCart(key)
      navigate(0)
    }
  }

  return (
    <>
      <CartBody>
        <CartData>
          <SImage src={photos[0]} alt={title} />
        </CartData>

        <CartData>
          <TextTitle>{title}</TextTitle>
        </CartData>

        <CartData>
          <SInputQuantity
            type="number"
            value={quantityProd}
            onChange={(e) => changeQuantity(e)}
          />
        </CartData>
        <CartData>
          <span>{formatPriceBr(price)}</span>
        </CartData>
        <CartData>
          <span>{formatPriceBr(price * quantityProd)}</span>
        </CartData>
        <CartData onClick={() => removeProductCart(item.product)}>
          <span>X</span>
        </CartData>
      </CartBody>
    </>
  )
}

export default CartProduct
