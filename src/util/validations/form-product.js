import { formatPriceField } from '../helpers/format'

export function isNotValid(form, formValidate) {
  const inputs = [
    'name',
    'description',
    'price',
    'promotion',
    'sku',
    'quantity',
    'height',
    'width',
    'depth',
    'weight'
  ]
  const invalid = (label) =>
    !Object.keys(form).includes(label) || form[label]?.length === 0

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0

  return inputs.some((item) => invalid(item)) || validations
}

export function fieldValidate(name, value, form) {
  let message = ''

  switch (name) {
    case 'title':
      if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break

    case 'description':
      if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break

    case 'price':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      }
      break

    case 'promotion':
      if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      }
      break
  }

  if (formatPriceField(form.price) < formatPriceField(form.promotion)) {
    message += 'O preço de promoção não pode ser maior que o valor do produto!'
  }

  return message
}
