import * as moment from 'moment'

export function isNotValid(form, formValidate) {
  const inputs = [
    'name',
    'email',
    'cpf',
    'birthDate',
    'password',
    'phone01',
    'zipCode',
    'street',
    'number',
    'district',
    'city',
    'uf'
  ]
  const invalid = (label) =>
    !Object.keys(form).includes(label) || form[label]?.length === 0

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0

  return inputs.some((item) => invalid(item)) || validations
}

export function fieldValidate(name, value, form) {
  let message = ''
  let regex = ''

  switch (name) {
    case 'name':
      regex = /\d/g
      if (regex.test(value)) {
        message += 'Não pode conter números!'
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break

    case 'email':
      regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!regex.test(value)) {
        message += 'E-mail inválido!'
      } else if (value.trim() === '') {
        message += 'Campo em branco!'
      }
      break

    case 'cpf':
      let cpf = value
        .trim()
        .replaceAll('-', '')
        .replaceAll('_', '')
        .replaceAll('.', '')
      if (cpf.length < 11) {
        message += 'CPF inválido!'
      }
      break

    case 'birthDate':
      var dateBirth = value.replaceAll('-', '/')
      var today = moment().format('YYYY/MM/DD')

      if (!moment(dateBirth).isValid) {
        message += 'Data inválida!'
      } else if (moment(dateBirth).isAfter(today)) {
        message += 'Data maior que a atual!'
      } else if (moment().diff(moment(dateBirth), 'years') < 18) {
        message += 'O usuário precisa ter no mínimo 18 anos!'
      }
      break

    case 'password':
      if (value.length < 6) {
        message += 'Acima de 6 caracteres!'
      }
      break

    case 'confirmPassword':
      if (value?.length !== form.password?.length) {
        message += 'Senhas não conferem!'
      } else if (form.password !== value) {
        message += 'Senhas não conferem!'
      }
      break

    case 'phone01':
      var phone = value.trim().replaceAll('-', '').replaceAll('_', '')

      regex =
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

      if (!regex.test(phone)) {
        message += 'Número de telefone inválido!'
      }
      break

    case 'phone02':
      let phone02 = value.trim().replaceAll('-', '').replaceAll('_', '')

      regex =
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

      if (!regex.test(phone02)) {
        message += 'Número de telefone inválido!'
      }
      break

    case 'street':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Precisa ter mais que 4 caracteres!'
      }
      break

    case 'number':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      }
      break

    case 'district':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Precisa ter mais que 4 caracteres!'
      }
      break

    case 'uf':
      if (value === 'selecione') {
        message += 'Selecione uma uf!'
      }
      break

    case 'city':
      if (value === 'selecione') {
        message += 'Selecione uma cidade!'
      }
      break

    case 'zipCode':
      let zipCode = value.trim().replaceAll('-', '').replaceAll('_', '')
      if (zipCode.length < 8) {
        message += 'Cep inválido!'
      }
      break
  }

  return message
}

export function formatPhone(phone) {
  phone = phone?.replace(/\D/g, '')
  phone = phone?.replace(/^(\d)/, '($1')
  phone = phone?.replace(/(.{3})(\d)/, '$1)$2')
  if (phone?.length == 9) {
    phone = phone?.replace(/(.{1})$/, '-$1')
  } else if (phone?.length == 10) {
    phone = phone?.replace(/(.{2})$/, '-$1')
  } else if (phone?.length == 11) {
    phone = phone?.replace(/(.{3})$/, '-$1')
  } else if (phone?.length == 12) {
    phone = phone?.replace(/(.{4})$/, '-$1')
  } else if (phone?.length > 12) {
    phone = phone?.replace(/(.{4})$/, '-$1')
  }
  return phone
}

