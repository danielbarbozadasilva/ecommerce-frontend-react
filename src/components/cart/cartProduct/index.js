import React from 'react'
import { formatPriceBr } from '../../../util/helpers/format'
import { TextTitle, CartBody, CartData, SInputQuantity, SImage } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { listByIdProduct } from '~/store/product/product.action'
import {
  getCartProducts,
  removeProductAction,
  updateCartQuantityAction
} from '~/store/cart/cart.action'

const CartProduct = ({ item }) => {
  const { title, product, quantity, price, photos } = item
  const productById = useSelector((state) => state.product.productById)
  const [quantityProd, setQuantityProd] = React.useState(quantity)
  const dispatch = useDispatch()

  const changeQuantity = async (e) => {
    dispatch(listByIdProduct(product))
    if (e.target.value > 0) {
      if (Number(e.target.value) > productById.quantity) {
        return alert('Quantidade indisponivel no estoque.')
      }
      setQuantityProd(e.target.value)
      dispatch(updateCartQuantityAction(product, e.target.value)).then(
        dispatch(getCartProducts())
      )
    }
  }

  const removeProductCart = (key) => {
    if (window.confirm('Você deseja realmente remover esse produto?')) {
      dispatch(removeProductAction(key))
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
