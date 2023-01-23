import React from 'react'
import { useDispatch } from 'react-redux'
import { listAllProducts } from '../../../store/product/product.action'
import { Select } from '@material-ui/core'
import { SBox, STitle } from './styled'

const FilterProduct = () => {
  const dispatch = useDispatch()

  const handleChange = async (props) => {
    const { value } = props.target
    dispatch(listAllProducts(null, null, value))
  }

  return (
    <SBox>
      <STitle>Ordenar</STitle>
      <div>
        <Select native defaultValue={'alfabetica_a-z'} onChange={handleChange}>
          <option value="alfabetica_a-z">selecione</option>
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
