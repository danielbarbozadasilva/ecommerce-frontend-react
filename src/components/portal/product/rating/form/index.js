import React from 'react'
import Form from 'react-bootstrap/Form'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { SForm, SButton } from './styled'
import {
  fieldValidate,
  isNotValid
} from '../../../../../util/validations/form-rating'
import Loading from '~/components/loading/form'
import { useSelector } from 'react-redux'
import { getUser } from '../../../../../config/auth'

function ContainerForm({ id, submit }) {
  const [form, setForm] = React.useState({})
  const [formValidate, setFormValidate] = React.useState({})
  const [score, setScore] = React.useState(4)
  const loading = useSelector((state) => state.rating.loading)

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value, form)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = () => {
    const nform = {
      name: form.name,
      text: form.text,
      score: score,
      clientid: getUser().clientid,
      productid: id
    }
    submit(nform)
  }

  return (
    <SForm>
      <Form.Group className="mb-4">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          autoFocus
          disabled={loading}
          value={form.name || ''}
          type="text"
          onChange={handleChange}
          id="name"
          name="name"
          placeholder="Insira o seu nome"
          invalid={formValidate.name}
        />
        <Form.Control.Feedback type="text">
          {formValidate.name || ''}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Comentário</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          rows={3}
          disabled={loading}
          value={form.text || ''}
          onChange={handleChange}
          id="text"
          name="text"
          placeholder="Insira o seu comentário"
          invalid={formValidate.text}
        />
        <Form.Control.Feedback type="text">
          {formValidate.text || ''}
        </Form.Control.Feedback>
      </Form.Group>

      <Typography component="legend" className="mb-2">
        Avaliação
      </Typography>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue)
        }}
      />
      {loading ? (
        <Loading />
      ) : (
        <SButton
          type="button"
          onClick={handleSubmit}
          disabled={isNotValid(form, formValidate)}
        >
          Enviar
        </SButton>
      )}
    </SForm>
  )
}

export default ContainerForm
