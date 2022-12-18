import React from 'react'
import { formatPriceBr, formatZipCode } from '../../../util/helpers/format'
import { calculateShippingAction } from '../../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '@material-ui/core'
import { navigate } from '@reach/router'
import {
  SPrice,
  SPriceSolic,
  SColumnPrice,
  SPriceButton,
  SFinishButton,
  STotalPrice
} from './styled'

const DataCart = () => {
  const cart = useSelector((state) => state.cart.all)
  const shipping = useSelector((state) => state.cart.shipping)
  const [zipCode, setZipCode] = React.useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setZipCode(formatZipCode(e.target.value))
  }

  const calculateShipping = () => {
    if (!zipCode || zipCode.length !== 9) {
      return alert('Digite o CEP corretamente.')
    }
    dispatch(calculateShippingAction(zipCode, cart))
  }

  const calculatePrice = () => {
    var price = 0
    cart.map((item) => {
      price += item.price * item.quantity
    })
    return formatPriceBr(price)
  }

  const calculateTotalPrice = () => {
    var price = 0
    var resultShipping = shipping
      ? Number(shipping?.price.replace(',', '.'))
      : 0
    cart.map((item) => {
      price += item.price * item.quantity
    })
    return formatPriceBr(price + resultShipping)
  }

  return (
    <>
      <SPriceSolic>
        <SColumnPrice>
          <h6>
            <strong>Valor Pedido:</strong>
          </h6>
        </SColumnPrice>
        <SPrice>
          <h6>{calculatePrice()}</h6>
        </SPrice>
      </SPriceSolic>

      {shipping ? (
        <SPriceSolic>
          <SColumnPrice>
            <h6>
              <strong>Frete:</strong>
            </h6>
          </SColumnPrice>
          <SPrice>
            Sedex ({shipping?.deadlineDelivery}) dia útil -
            {formatPriceBr(shipping?.price.replace(',', '.'))}
          </SPrice>
        </SPriceSolic>
      ) : (
        ''
      )}

      <SPriceSolic>
        <SColumnPrice>
          <h6>
            <strong>Valor Total:</strong>
          </h6>
        </SColumnPrice>
        <SPrice>
          <h6>{calculateTotalPrice()}</h6>
        </SPrice>
      </SPriceSolic>

      {shipping ? (
        ''
      ) : (
        <SPriceSolic>
          <SColumnPrice>
            <Input
              value={zipCode}
              name="zipCode"
              placeholder="Calcular Frete"
              onChange={handleChange}
            />
          </SColumnPrice>
          <SPriceButton onClick={() => calculateShipping()}>
            Calcular
          </SPriceButton>
        </SPriceSolic>
      )}

      <STotalPrice>
        <SFinishButton
          onClick={() => navigate('/checkout')}
          disabled={!shipping}
        >
          Finalizar Pedido
        </SFinishButton>
      </STotalPrice>
    </>
  )
}

export default DataCart
