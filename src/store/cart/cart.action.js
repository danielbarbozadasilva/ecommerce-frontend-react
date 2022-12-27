import {
  getCart,
  removeCart,
  cleanCart,
  addCart,
  updateCartQuantity
} from '../../util/cart'
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

export const addCartProduct = (data) => {
  return async (dispatch) => {
    try {
      const result = addCart(data)
      dispatch({ type: TYPES.ADD_CART, data: result })
    } catch (error) {}
  }
}

export const updateCartQuantityAction = (id, quantity) => {
  return async (dispatch) => {
    try {
      const result = updateCartQuantity(id, quantity)
      dispatch({ type: TYPES.UPDATE_CART, data: result })
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

export const removeProductAction = (index) => {
  return async (dispatch) => {
    try {
      const result = removeCart(index)
      dispatch({ type: TYPES.REMOVE_PROD_CART, data: result })
    } catch (error) {}
  }
}

export const cleanCartAction = () => {
  return async (dispatch) => {
    cleanCart()
    dispatch({ type: TYPES.REMOVE_PROD_CART })
  }
}
