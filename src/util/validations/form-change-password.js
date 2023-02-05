export function isNotValid(form, formValidate) {
  const inputs = ['token', 'email', 'newPassword', 'confirmPassword']
  const invalid = (label) =>
    !Object.keys(form).includes(label) || form[label]?.length === 0

  const validations =
    Object.values(formValidate).filter((item) => item !== '').length > 0
  console.log(validations)
  return inputs.some((item) => invalid(item)) || validations
}

export function fieldValidate(name, value, form) {
  let message = ''
  switch (name) {
    case 'token':
      if (value.trim() === '') {
        message += 'Campo em branco!'
      }
      break

    case 'email':
      let regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!regex.test(value)) {
        message += 'E-mail inválido!'
      } else if (value.trim() === '') {
        message += 'Campo em branco!'
      }
      break

    case 'newPassword':
      if (value.length < 6) {
        message += 'Acima de 6 caracteres!'
      }
      break

    case 'confirmPassword':
      if (value?.length !== form.newPassword?.length) {
        message += 'Senhas não conferem!'
      } else if (form.newPassword !== value) {
        message += 'Senhas não conferem!'
      }
      break
  }

  return message
}
