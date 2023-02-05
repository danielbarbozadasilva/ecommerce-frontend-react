import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as moment from 'moment'
import { Col, Form } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import { Select } from '@material-ui/core'
import ufCityFile from '../../../../util/state-city.json'
import { SFormSignUp, SRow, SFormGroup, STextForm, SButton } from '../styled'
import Loading from '../../../loading/form/index'
import {
  fieldValidate,
  isNotValid,
  formatPhone
} from '../../../../util/validations/form-signup'
import { searchZipCode } from '~/store/auth/auth.action'

const SignUp = ({ submit }) => {
  const registered = useSelector((state) => state.auth.registered)
  const loading = useSelector((state) => state.auth.loading)
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])
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

  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    const result = await searchZipCode(cep)
    setForm({
      ...form,
      street: result.logradouro,
      city: result.localidade?.toUpperCase(),
      district: result.bairro,
      uf: result.uf
    })
  }

  useEffect(() => {
    const localization = ufCityFile.states.map(({ name, uf }) => ({ name, uf }))
    setUf(localization)
  }, [])

  useEffect(() => {
    const result = ufCityFile.states.find((item) => item.uf === form.uf)
    if (result) {
      setCity(result.city)
    }
  }, [form.uf])

  useEffect(() => {
    if (registered) {
      setForm({})
    }
  }, [registered])

  const submitForm = () => {
    const nform = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      birthDate: form.birthDate,
      password: form.password,
      phones: [form.phone01, form.phone02],
      address: {
        street: form.street,
        number: form.number,
        complement: form.complement,
        district: form.district,
        city: form.city,
        zipCode: form.zipCode,
        state: form.uf
      }
    }
    submit(nform)
  }

  return (
    <SFormSignUp autoComplete="off">
      <STextForm>Cadastre-se</STextForm>
      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Nome:</Form.Label>
          <Form.Control
            autoFocus
            disabled={loading}
            type="text"
            id="name"
            value={form.name || ''}
            onChange={handleChange}
            name="name"
            placeholder="Insira o seu nome"
            invalid={formValidate.name}
          />
          <Form.Control.Feedback type="text">
            {formValidate.name || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*E-mail:</Form.Label>
          <Form.Control
            disabled={loading}
            type="email"
            id="email"
            value={form.email || ''}
            onChange={handleChange}
            name="email"
            placeholder="Insira seu email"
            invalid={formValidate.email}
          />
          <Form.Control.Feedback type="text">
            {formValidate.email || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Cpf:</Form.Label>
          <InputMask
            mask="999.999.999-99"
            className="form-control"
            type="text"
            id="cpf"
            onChange={handleChange}
            name="cpf"
            value={form.cpf || ''}
            placeholder="Informe o seu cpf"
            disabled={loading}
            invalid={formValidate.cpf}
          />
          <Form.Control.Feedback type="text">
            {formValidate.cpf || ''}
          </Form.Control.Feedback>
        </SFormGroup>
        <SFormGroup as={Col}>
          <Form.Label>*Data de nascimento:</Form.Label>
          <Form.Control
            disabled={loading}
            type="date"
            id="birthDate"
            value={
              form.birthDate
                ? moment(form.birthDate)
                    .format('YYYY/MM/DD')
                    .replaceAll('/', '-')
                : ''
            }
            onChange={handleChange}
            name="birthDate"
            invalid={formValidate.birthDate}
          />
          <Form.Control.Feedback type="text">
            {formValidate.birthDate || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Senha:</Form.Label>
          <Form.Control
            disabled={loading}
            type="password"
            id="password"
            value={form.password || ''}
            onChange={handleChange}
            name="password"
            placeholder="Insira a sua senha"
            invalid={formValidate.password}
          />
          <Form.Control.Feedback type="text">
            {formValidate.password || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Confirmar senha:</Form.Label>
          <Form.Control
            disabled={loading}
            type="password"
            id="confirmPassword"
            value={form.confirmPassword || ''}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            invalid={formValidate.confirmPassword}
          />
          <Form.Control.Feedback type="text">
            {formValidate.confirmPassword || ''}
          </Form.Control.Feedback>
        </SFormGroup>
        <SFormGroup as={Col}>
          <Form.Label>*Telefone 01:</Form.Label>
          <Form.Control
            disabled={loading}
            type="text"
            id="phone01"
            value={formatPhone(form.phone01) || ''}
            onChange={handleChange}
            name="phone01"
            placeholder="Informe o seu telefone"
            invalid={formValidate.phone01}
          />
          <Form.Control.Feedback type="text">
            {formValidate.phone01 || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>Telefone 02:</Form.Label>
          <Form.Control
            disabled={loading}
            type="text"
            id="phone02"
            value={formatPhone(form.phone02) || ''}
            onChange={handleChange}
            name="phone02"
            placeholder="Informe o seu telefone"
            invalid={formValidate.phone02}
          />
          <Form.Control.Feedback type="text">
            {formValidate.phone02 || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Cep:</Form.Label>
          <InputMask
            mask="99999-999"
            className="form-control"
            type="text"
            id="zipCode"
            onChange={handleChange}
            name="zipCode"
            value={form.zipCode || ''}
            placeholder="Informe o seu telefone"
            onBlur={checkCEP}
            invalid={formValidate.zipCode}
            disabled={loading}
          />
          <Form.Control.Feedback type="text">
            {formValidate.zipCode || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Uf:</Form.Label>
          <Select
            fullWidth
            native
            value={form.uf || ''}
            onChange={handleChange}
            inputProps={{
              name: 'uf',
              id: 'outlined-native-simple'
            }}
          >
            <option value="selecione">selecione</option>
            {uf?.map(({ name, uf }, i) => (
              <option key={i} value={uf}>
                {uf}
              </option>
            ))}
          </Select>
          <Form.Control.Feedback type="text">
            {formValidate.uf || ''}
          </Form.Control.Feedback>
        </SFormGroup>
        <SFormGroup as={Col}>
          <Form.Label>*Cidade:</Form.Label>
          <Select
            fullWidth
            native
            value={form.city || ''}
            onChange={handleChange}
            inputProps={{
              name: 'city',
              id: 'outlined-native-simple'
            }}
          >
            <option value="selecione">selecione</option>
            {city?.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          </Select>
          <Form.Control.Feedback type="text">
            {formValidate.city || ''}
          </Form.Control.Feedback>
        </SFormGroup>
        <SFormGroup as={Col}>
          <Form.Label>*Bairro:</Form.Label>
          <Form.Control
            invalid={formValidate.district}
            disabled={loading}
            type="text"
            id="district"
            value={form.district || ''}
            onChange={handleChange}
            name="district"
            placeholder="Insira o seu bairro"
          />
          <Form.Control.Feedback type="text">
            {formValidate.district || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>

      <SRow>
        <SFormGroup as={Col}>
          <Form.Label>*Rua:</Form.Label>
          <Form.Control
            invalid={formValidate.street}
            disabled={loading}
            type="text"
            id="street"
            value={form.street || ''}
            onChange={handleChange}
            name="street"
            placeholder="Insira a sua rua"
          />
          <Form.Control.Feedback type="text">
            {formValidate.street || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>*Número:</Form.Label>
          <Form.Control
            invalid={formValidate.number}
            disabled={loading}
            type="text"
            id="number"
            value={form.number || ''}
            onChange={handleChange}
            name="number"
            placeholder="Insira o número"
          />
          <Form.Control.Feedback type="text">
            {formValidate.number || ''}
          </Form.Control.Feedback>
        </SFormGroup>

        <SFormGroup as={Col}>
          <Form.Label>Complemento:</Form.Label>
          <Form.Control
            invalid={formValidate.complement}
            disabled={loading}
            type="text"
            id="complement"
            value={form.complement || ''}
            onChange={handleChange}
            name="complement"
            placeholder="Insira o complemento"
          />
          <Form.Control.Feedback type="text">
            {formValidate.complement || ''}
          </Form.Control.Feedback>
        </SFormGroup>
      </SRow>
      {loading ? (
        <Loading />
      ) : (
        <SButton
          type="button"
          onClick={submitForm}
          disabled={isNotValid(form, formValidate)}
        >
          Cadastrar
        </SButton>
      )}
    </SFormSignUp>
  )
}

export default SignUp
