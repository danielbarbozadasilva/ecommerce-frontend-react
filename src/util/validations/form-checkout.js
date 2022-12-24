import moment from 'moment'

export function isNotValid(form, formValidate, paymentMethod) {
  var inputs = []
  if (paymentMethod === 'CREDITCARD') {
    inputs = [
      'fullName',
      'cpf',
      'cardNumber',
      'shelfLife',
      'cvv',
      'birthDate',
      'phone',
      'paymentStreet',
      'paymentNumber',
      'paymentDistrict',
      'paymentCity',
      'paymentUf',
      'street',
      'number',
      'district',
      'city',
      'uf'
    ]
  } else {
    inputs = ['street', 'number', 'district', 'city', 'uf']
  }

  const invalid = (label) =>
    !Object.keys(form).includes(label) || form[label]?.length === 0

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0

  return inputs.some((item) => invalid(item)) || validations
}

export function fieldValidate(name, value, brand, cardToken) {
  let message = ''
  let regex = ''

  switch (name) {
    case 'fullName':
      regex = /\d/g
      if (regex.test(value)) {
        message += 'Não pode conter números!'
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break

    case 'cpf':
      if (
        value.replaceAll('.', '').replaceAll('-', '').replaceAll('_', '')
          .length !== 11
      ) {
        message += 'Precisa ter 11 caracteres!'
      }
      break

    case 'cardNumber':
      if (value.replaceAll(' ', '').replaceAll('_', '').length !== 16) {
        message += 'Número inválido!'
      } else if (!brand) {
        message += 'Número inválido!'
      }
      break

    case 'shelfLife':
      var dateValue = value.replaceAll('/', '').replaceAll('_', '')
      if (dateValue.length === 6) {
        if (moment(value, 'MM/YYYY').isBefore(moment(moment(), 'MM/YYYY'))) {
          message += 'Data inválida!'
        }
      } else {
        message += 'Data inválida!'
      }
      break

    case 'cvv':
      if (value.replaceAll('_', '').length !== 3) {
        message += 'Código inválido!'
      } else if (!cardToken) {
        message += 'Código inválido!'
      }

      break

    case 'phone':
      var phone = value.trim().replaceAll('-', '').replaceAll('_', '')

      regex =
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

      if (!regex.test(phone)) {
        message += 'Número de telefone inválido!'
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

    case 'zipCode' || 'paymentZipCode':
      let zipCode = value.trim().replaceAll('-', '').replaceAll('_', '')
      if (zipCode.length < 8) {
        message += 'Cep inválido!'
      }
      break

    case 'street' || 'paymentStreet':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Precisa ter mais que 4 caracteres!'
      }
      break

    case 'number' || 'paymentNumber':
      regex = /\d/g
      if (!regex.test(value)) {
        message += 'Não pode conter letras!'
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      }
      break

    case 'district' || 'paymentDistrict':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Precisa ter mais que 4 caracteres!'
      }
      break

    case 'uf' || 'paymentUf':
      if (value === 'selecione') {
        message += 'Selecione uma uf!'
      }
      break

    case 'city' || 'paymentCity':
      if (value === 'selecione') {
        message += 'Selecione uma cidade!'
      }
      break
  }

  return message
}
