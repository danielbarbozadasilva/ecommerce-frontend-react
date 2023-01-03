export function formatPriceBr(data) {
  return Number(data).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

export function formatMoney(data) {
  return Number(
    data.trim().replace('R$', '').replace('.', '').replace(',', '.')
  )
}

export function formatZipCode(value) {
  const result = (value || '').match(/\d+/g)
  const zipCode = (result || []).join('')
  return zipCode.length > 5
    ? zipCode.slice(0, 5) + '-' + zipCode.slice(5, 8)
    : zipCode
}

export function formatPriceField(data) {
  return data?.replace('R$', '').replace('.', '').replace(',', '.').trim()
}

export function formatObjectURL(data) {
  if (data[0]?.search('localhost') === -1) {
    return data
  }
  return URL.createObjectURL(data)
}

export function getMoney(e) {
  const money = e?.target?.value
  const result = money?.replace('R$', '')
  return formatReal(parseInt(result?.replace(/[\D]+/g, '')))
}

export function formatReal(int) {
  let result = int + ''
  let negative = false
  if (result.indexOf('-') == 0) {
    negative = true
    result = result.replace('-', '')
  }

  if (result.length == 1) result = '0' + result

  result = result.replace(/([0-9]{2})$/g, ',$1')
  if (result.length > 6) {
    result = result.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
  }

  if (result.length > 9) {
    result = result.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
  }

  if (result.length > 12) {
    result = result.replace(
      /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      '.$1.$2.$3,$4'
    )
  }

  if (result.indexOf('.') == 0) result = result.replace('.', '')
  if (result.indexOf(',') == 0) result = result.replace(',', '0,')

  return negative
    ? '-' + 'R$' + result.replace('NaN', '')
    : 'R$' + result.replace('NaN', '')
}
