export function formatPriceBr(data) {
  return Number(data).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}
