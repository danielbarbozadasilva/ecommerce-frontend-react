import React from 'react'
import { navigate } from '@reach/router'
import { Button, Form } from 'react-bootstrap'

const Search = () => {
  const [search, setSearch] = React.useState('')

  const handleChange = async (props) => {
    const { value } = props.target
    setSearch(value)
  }

  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
          value={search}
        />
        <Button
          onClick={() =>
            navigate(`/product/search/${search}`).then(navigate(0))
          }
          disabled={!search}
          variant="outline-secondary"
        >
          Buscar
        </Button>
      </Form>
    </>
  )
}

export default Search
