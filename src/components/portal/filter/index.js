import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllProducts } from '../../../store/product/product.action'
import { Select } from '@material-ui/core'
import { SBox, STitle } from './styled'

const FilterProduct = () => {
  const sort = useSelector((state) => state.product.sort)
  const dispatch = useDispatch()

  const handleChange = async (props) => {
    const { value } = props.target
    dispatch(listAllProducts(null, null, value))
  }

  return (
    <SBox>
      <STitle>Ordenar</STitle>
      <div>
        <Select native defaultValue={sort} onChange={handleChange}>
          <option value="selecione">selecione</option>
          <option value="alfabetica_a-z">Ordem alfabética crescente</option>
          <option value="alfabetica_z-a">Ordem alfabética decrescente</option>
          <option value="price-crescente">Menor preço</option>
          <option value="price-decrescente">Maior preço</option>
        </Select>
      </div>
    </SBox>
  )
}
export default FilterProduct
