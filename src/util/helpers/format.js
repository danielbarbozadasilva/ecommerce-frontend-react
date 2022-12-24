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
