import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SForm, STextForm, SButtonFormRecovery } from '../styled'
import Loading from '../../../loading/form/index'
import {
  fieldValidate,
  isNotValid
} from '../../../../util/validations/form-recovery-password'

const FormRecoveryPassword = ({ submit }) => {
  const loading = useSelector((state) => state.auth.loading)
  const [formValidate, setFormValidate] = useState({})
  const [form, setForm] = useState({})

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    submit(form)
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <STextForm>Recuperar senha</STextForm>
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
export default FormRecoveryPassword
