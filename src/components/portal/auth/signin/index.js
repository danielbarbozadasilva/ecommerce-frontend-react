import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  SForm,
  SColFooter,
  STextForm,
  SButtonSignIn,
  STextLink
} from '../styled'
import Loading from '../../../loading/form/index'

const SignIn = ({ submit }) => {
  const registered = useSelector((state) => state.auth.registered)
  const loading = useSelector((state) => state.auth.loading)
  const [form, setForm] = useState({})

  useEffect(() => {
    if (registered) {
      setForm({})
    }
  }, [registered])

  const handleChange = (props) => {
    const { value, name } = props.target
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
            <STextForm>Login</STextForm>
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
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                disabled={loading}
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={form.password || ''}
                placeholder="Informe a sua senha"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Lembrar credenciais" />
            </Form.Group>
            {loading ? (
              <Loading />
            ) : (
              <SButtonSignIn type="button" onClick={submitForm}>
                Entrar
              </SButtonSignIn>
            )}
            <SColFooter>
              Esqueceu a senha?{' '}
              <STextLink href="/recovery-password">Redefinir senha</STextLink>
            </SColFooter>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default SignIn
