import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Form } from 'react-bootstrap'
import moment from 'moment'
import InputMask from 'react-input-mask'
import { Select, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import ufCityFile from '../../../util/state-city.json'
import { SForm, SRow, SFormGroup, STextForm, SButton } from './styled'
import Loading from '../../loading/form/index'
import {
  fieldValidate,
  isNotValid
} from '../../../util/validations/form-checkout'
import { formatPriceBr, formatMoney } from '../../../util/helpers/format'
import { formatPhone } from '~/util/validations/form-signup'
import { getSessionPayment } from '~/store/payment/payment.action'

const FormCheckout = ({ data, submit }) => {
  const cart = useSelector((state) => state.cart.all)
  const loading = useSelector((state) => state.auth.loading)
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('')
  const [brand, setBrand] = useState('')
  const [cardToken, setCardToken] = useState(undefined)
  const [installments, setInstallments] = useState('')
  const [formValidate, setFormValidate] = useState({})
  const [form, setForm] = useState({})
  const dispatch = useDispatch()

  const handleChange = (props) => {
    const { value, name } = props.target

    const message = fieldValidate(name, value, brand, cardToken)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
    getBrand()
    getCardToken()
  }

  useEffect(() => {
    dispatch(getSessionPayment()).then((result) => {
      PagSeguroDirectPayment.setSessionId(result)
    })
  }, [dispatch])

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

  const getBrand = () => {
    PagSeguroDirectPayment.getBrand({
      cardBin: form?.cardNumber?.split(' ')?.join('')?.slice(0, 6),
      success: (r) => setBrand(r)
    })
  }

  const getCardToken = () => {
    const params = {
      cardNumber: form?.cardNumber?.split(' ').join(''),
      brand: brand?.name,
      cvv: form?.cvv,
      expirationMonth: form?.shelfLife?.slice(0, 2),
      expirationYear: form?.shelfLife?.slice(3, 7),
      success: (r) => setCardToken(r.card.token)
    }
    PagSeguroDirectPayment.createCardToken(params)
  }

  const submitForm = () => {
    const nform = {
      cart: cart,
      zipCode: form?.zipCode || data.shipping.zipCode,
      shipping: formatMoney(data.shipping.price),
      payment: {
        price: formatMoney(data.totalPrice),
        type: paymentMethod || 'BOLETO',
        installments: form?.paymentInstallments,
        addressDeliveryIgualCharging: false,
        address: {
          street: form?.paymentStreet,
          number: form?.paymentNumber,
          complement: form?.paymentComplement,
          district: form?.paymentDistrict,
          city: form?.paymentCity,
          zipCode: form?.paymentZipCode || data.shipping.zipCode,
          state: form?.paymentUf
        },
        card: {
          fullName: form?.fullName,
          areaCode: form?.phone?.slice(1, 3),
          phone: form?.phone,
          birthDate: form?.birthDate,
          creditCardToken: cardToken,
          cpf: form?.cpf
        }
      },
      deliveries: {
        price: formatMoney(data.shipping.price),
        type: data.shipping.code,
        deliveryTime: data.shipping.deadlineDelivery,
        address: {
          street: form.street,
          number: form.number,
          complement: form.complement,
          district: form.district,
          city: form.city,
          zipCode: form.zipCode || data.shipping.zipCode,
          state: form.uf
        }
      }
    }
    submit(nform)
  }

  return (
    <SForm autoComplete="off">
      <SRow>
        <STextForm>Dados de pagamento</STextForm>
        <SFormGroup as={Col}>
          <Form.Label>*Selecione um método de pagamento:</Form.Label>
          <div>
            <RadioGroup
              name="paymentType"
              value={form?.paymentType || paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="BOLETO"
                control={<Radio color="default" />}
                label="Boleto"
              />
              <FormControlLabel
                value="CREDITCARD"
                control={<Radio color="default" />}
                label="Cartão de crédito"
              />
            </RadioGroup>
          </div>
        </SFormGroup>
      </SRow>

      {paymentMethod && paymentMethod === 'CREDITCARD' ? (
        <>
          <SRow>
            <SFormGroup as={Col}>
              <Form.Label>*Parcelas:</Form.Label>
              <Select
                fullWidth
                native
                name="installments"
                value={form?.paymentInstallments || installments}
                onChange={(e) => setInstallments(e.target.value)}
              >
                <option defaultValue="1">1x {data.totalPrice}</option>
                <option value="2">
                  2x {formatPriceBr(formatMoney(data.totalPrice) / 2)}
                </option>
                <option value="3">
                  3x {formatPriceBr(formatMoney(data.totalPrice) / 3)}
                </option>
                <option value="4">
                  4x {formatPriceBr(formatMoney(data.totalPrice) / 4)}
                </option>
                <option value="5">
                  5x {formatPriceBr(formatMoney(data.totalPrice) / 5)}
                </option>
                <option value="6">
                  6x {formatPriceBr(formatMoney(data.totalPrice) / 6)}
                </option>
              </Select>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>*Nome completo:</Form.Label>
              <Form.Control
                invalid={formValidate.fullName}
                disabled={loading}
                type="text"
                id="fullName"
                value={form.fullName || ''}
                onChange={handleChange}
                name="fullName"
                placeholder="Insira o nome completo"
              />
              <Form.Control.Feedback type="text">
                {formValidate.fullName || ''}
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
              <Form.Label>*Número do cartão:</Form.Label>
              <InputMask
                mask="9999 9999 9999 9999"
                invalid={formValidate.cardNumber}
                disabled={loading}
                type="text"
                id="cardNumber"
                className="form-control"
                value={form.cardNumber || ''}
                onChange={handleChange}
                name="cardNumber"
                placeholder="Insira o número do cartão"
              />
              <Form.Control.Feedback type="text">
                {formValidate.cardNumber || ''}
              </Form.Control.Feedback>
            </SFormGroup>
          </SRow>

          <SRow>
            <SFormGroup as={Col}>
              <Form.Label>*Validade:</Form.Label>
              <InputMask
                mask="99/9999"
                className="form-control"
                type="text"
                id="shelfLife"
                onChange={handleChange}
                name="shelfLife"
                value={form.shelfLife || ''}
                placeholder="Informe a validade"
                disabled={loading}
                invalid={formValidate.shelfLife}
              />
              <Form.Control.Feedback type="text">
                {formValidate.shelfLife || ''}
              </Form.Control.Feedback>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>*CVV:</Form.Label>
              <InputMask
                mask="999"
                className="form-control"
                type="text"
                id="cvv"
                onChange={handleChange}
                name="cvv"
                value={form.cvv || ''}
                placeholder="Informe o seu cvv"
                disabled={loading}
                invalid={formValidate.cvv}
              />
              <Form.Control.Feedback type="text">
                {formValidate.cvv || ''}
              </Form.Control.Feedback>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>*Telefone:</Form.Label>
              <Form.Control
                disabled={loading}
                type="text"
                id="phone"
                value={formatPhone(form.phone) || ''}
                onChange={handleChange}
                name="phone"
                placeholder="Informe o seu telefone"
                invalid={formValidate.phone}
              />
              <Form.Control.Feedback type="text">
                {formValidate.phone || ''}
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
              <Form.Label>*Cep:</Form.Label>
              <InputMask
                autoFocus
                mask="99999-999"
                className="form-control"
                type="text"
                id="paymentZipCode"
                onChange={handleChange}
                name="paymentZipCode"
                value={form?.paymentZipCode || data.shipping.zipCode}
                placeholder="Informe o seu cep"
                invalid={formValidate.paymentZipCode}
                disabled={loading}
              />
              <Form.Control.Feedback type="text">
                {formValidate.paymentZipCode || ''}
              </Form.Control.Feedback>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>*UF:</Form.Label>
              <Form.Control
                invalid={formValidate.paymentUf}
                disabled={loading}
                type="text"
                id="paymentUf"
                value={form.paymentUf || ''}
                onChange={handleChange}
                name="paymentUf"
                placeholder="Insira a uf"
              />
              <Form.Control.Feedback type="text">
                {formValidate.paymentUf || ''}
              </Form.Control.Feedback>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>*Cidade:</Form.Label>
              <Form.Control
                invalid={formValidate.paymentCity}
                disabled={loading}
                type="text"
                id="paymentCity"
                value={form.paymentCity || ''}
                onChange={handleChange}
                name="paymentCity"
                placeholder="Insira a sua cidade"
              />
              <Form.Control.Feedback type="text">
                {formValidate.paymentCity || ''}
              </Form.Control.Feedback>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>*Bairro:</Form.Label>
              <Form.Control
                invalid={formValidate.paymentDistrict}
                disabled={loading}
                type="text"
                id="paymentDistrict"
                value={form.paymentDistrict || ''}
                onChange={handleChange}
                name="paymentDistrict"
                placeholder="Insira o seu bairro"
              />
              <Form.Control.Feedback type="text">
                {formValidate.paymentDistrict || ''}
              </Form.Control.Feedback>
            </SFormGroup>
          </SRow>

          <SRow>
            <SFormGroup as={Col}>
              <Form.Label>*Rua:</Form.Label>
              <Form.Control
                invalid={formValidate.paymentStreet}
                disabled={loading}
                type="text"
                id="paymentStreet"
                value={form.paymentStreet || ''}
                onChange={handleChange}
                name="paymentStreet"
                placeholder="Insira a sua rua"
              />
              <Form.Control.Feedback type="text">
                {formValidate.paymentStreet || ''}
              </Form.Control.Feedback>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>*Número:</Form.Label>
              <Form.Control
                invalid={formValidate.paymentNumber}
                disabled={loading}
                type="text"
                id="paymentNumber"
                value={form.paymentNumber || ''}
                onChange={handleChange}
                name="paymentNumber"
                placeholder="Insira o número"
              />
              <Form.Control.Feedback type="text">
                {formValidate.paymentNumber || ''}
              </Form.Control.Feedback>
            </SFormGroup>

            <SFormGroup as={Col}>
              <Form.Label>Complemento:</Form.Label>
              <Form.Control
                invalid={formValidate.paymentComplement}
                disabled={loading}
                type="text"
                id="paymentComplement"
                value={form.paymentComplement || ''}
                onChange={handleChange}
                name="paymentComplement"
                placeholder="Insira o complemento"
              />
              <Form.Control.Feedback type="text">
                {formValidate.paymentComplement || ''}
              </Form.Control.Feedback>
            </SFormGroup>
          </SRow>
        </>
      ) : (
        ''
      )}

      <STextForm>Dados da entrega</STextForm>
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
            value={form?.zipCode || data.shipping.zipCode}
            placeholder="Informe o seu telefone"
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
          disabled={isNotValid(form, formValidate, paymentMethod)}
        >
          Finalizar
        </SButton>
      )}
    </SForm>
  )
}

export default FormCheckout
