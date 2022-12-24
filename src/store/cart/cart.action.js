import { getCart, removeCart, cleanCart } from '../../util/cart'
import TYPES from '../types'
import { calculatePriceDeliveryService } from '../../services/cart.service'

export const getCartProducts = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CART_LOADING, status: true })
    try {
      const result = getCart()
      dispatch({
        type: TYPES.GET_CART,
        data: result
      })
    } catch (error) {}
  }
}

export const calculateShippingAction = (zipCode, cart) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CART_LOADING, status: true })
    try {
      const result = await calculatePriceDeliveryService(zipCode, cart)
      dispatch({
        type: TYPES.FETCH_PRICE_DELIVERY,
        data: result.data.data[0]
      })
    } catch (error) {}
  }
}

export const removeProduct = (index) => {
  removeCart(index)
  return { type: TYPES.REMOVE_PROD_CART, cartId: index }
}

export const cleanCartAction = () => {
  return async (dispatch) => {
    cleanCart()
    dispatch({ type: TYPES.REMOVE_PROD_CART })
  }
}
