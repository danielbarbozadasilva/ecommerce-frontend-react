import React from 'react'
import { getCountItemsCart } from '../../../util/cart'
import { BsFillCartFill } from 'react-icons/bs'
import { QuantityCard } from './styled'

const IconCart = () => {
  return (
    <>
      <BsFillCartFill />
      <QuantityCard>{getCountItemsCart() || 0}</QuantityCard>
    </>
  )
}

export default IconCart
