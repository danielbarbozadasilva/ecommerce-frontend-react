import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SForm, STextForm, SButtonFormRecovery } from '../styled'
import Loading from '../../../loading/form/index'
import {
  fieldValidate,
  isNotValid
} from '../../../../util/validations/form-change-password'

const FormChangePassword = ({ submit }) => {
  const loading = useSelector((state) => state.auth.loading)
  const [formValidate, setFormValidate] = useState({})
  const [form, setForm] = useState({})

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value, form)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    const nform = {
      token: form.token,
      email: form.email,
      newPassword: form.newPassword
    }
    submit(nform)
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <STextForm>Recuperar senha</STextForm>
            <Form.Group className="mb-3">
              <Form.Label>Informe o token:</Form.Label>
              <Form.Control
                disabled={loading}
                type="text"
                name="token"
                id="token"
                onChange={handleChange}
                value={form.token || ''}
                placeholder="Informe o token recebido por e-mail"
              />
              <Form.Control.Feedback type="text">
                {formValidate.token || ''}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                disabled={loading}
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={form.email || ''}
                placeholder="Informe o seu e-mail"
              />
              <Form.Control.Feedback type="text">
                {formValidate.email || ''}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nova senha:</Form.Label>
              <Form.Control
                disabled={loading}
                type="password"
                name="newPassword"
                id="newPassword"
                onChange={handleChange}
                value={form.newPassword || ''}
                placeholder="Informe a sua nova senha"
              />
              <Form.Control.Feedback type="text">
                {formValidate.newPassword || ''}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirmar senha:</Form.Label>
              <Form.Control
                disabled={loading}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleChange}
                value={form.confirmPassword || ''}
                placeholder="Informe a sua nova senha"
              />
              <Form.Control.Feedback type="text">
                {formValidate.confirmPassword || ''}
              </Form.Control.Feedback>
            </Form.Group>
            {loading ? (
              <Loading />
            ) : (
              <SButtonFormRecovery
                type="button"
                onClick={submitForm}
                disabled={isNotValid(form, formValidate)}
              >
                Redefinir senha
              </SButtonFormRecovery>
            )}
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default FormChangePassword
