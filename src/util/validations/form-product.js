export function isNotValid(form, formValidate) {
  const inputs = [
    'title',
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

export function fieldValidate(name, value) {
  let message = ''
  let regex = ''

  switch (name) {
    case 'title':
      regex = /\d/g
      if (regex.test(value)) {
        message += 'Não pode conter números!'
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
        message += 'Acima de 4 caracteres!'
      }
      break

    case 'description':
      regex = /\d/g
      if (regex.test(value)) {
        message += 'Não pode conter números!'
      } else if (value.trim() === '') {
        message += 'Não pode ser vazio!'
      } else if (value.length <= 4) {
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

  return message
}
