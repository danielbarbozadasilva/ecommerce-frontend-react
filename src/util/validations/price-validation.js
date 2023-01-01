export function getMoney(str) {
  const result = str?.replace('R$', '')
  return formatReal(parseInt(result?.replace(/[\D]+/g, '')))
}

function formatReal(int) {
  let tmp = int + ''
  let neg = false
  if (tmp.indexOf('-') == 0) {
    neg = true
    tmp = tmp.replace('-', '')
  }

  if (tmp.length == 1) tmp = '0' + tmp

  tmp = tmp.replace(/([0-9]{2})$/g, ',$1')
  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
  }

  if (tmp.length > 9) {
    tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3')
  }

  if (tmp.length > 12) {
    tmp = tmp.replace(
      /([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      '.$1.$2.$3,$4'
    )
  }

  if (tmp.indexOf('.') == 0) tmp = tmp.replace('.', '')
  if (tmp.indexOf(',') == 0) tmp = tmp.replace(',', '0,')

  return neg
    ? '-' + 'R$' + tmp.replace('NaN', '')
    : 'R$' + tmp.replace('NaN', '')
}

export function formatPriceField(data) {
  return data?.replace('R$', '').replace(',', '.').trim()
}