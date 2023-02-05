import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchProducts } from '~/store/product/product.action'
import SearchIcon from '@material-ui/icons/Search'
import { SIconButton } from './styled'

const Search = () => {
  const [search, setSearch] = React.useState(' ')
  const dispatch = useDispatch()

  const handleChange = async (props) => {
    const { value } = props.target
    setSearch(value)
  }

  const submitForm = () => {
    dispatch(searchProducts(search))
  }

  return (
    <>
      <Form className="d-flex">
        <Form.Control
          placeholder="Buscar nome"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
        <SIconButton onClick={submitForm} aria-label="search">
          <SearchIcon />
        </SIconButton>
      </Form>
    </>
  )
}

export default Search
