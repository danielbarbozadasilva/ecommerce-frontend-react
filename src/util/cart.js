export const addCart = (item) => {
  let cart = getCart()
  let found

  cart = cart.map((data) => {
    if (data.product === item.product) {
      found = true
      return {
        ...data,
        quantity: Number(data.quantity) + Number(item.quantity)
      }
    } else {
      return data
    }
  })

  if (!found) {
    cart.push(item)
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]')

export const cleanCart = () => localStorage.removeItem('cart')

export const getCountItemsCart = () =>
  getCart().reduce((c, { quantity }) => c + (Number(quantity) || 1), 0)

export const removeCart = (id) => {
  let cart = getCart()
  var result = cart.filter((item) => item.product !== id)
  localStorage.setItem('cart', JSON.stringify(result))
}

export const updateCartQuantity = (id, quantity) => {
  let cart = getCart()
  var resultFilter = cart.filter((item) => item.product !== id)
  var selected = cart.find((item) => item.product === id)
  selected.quantity = quantity
  resultFilter.push(selected)
  localStorage.setItem('cart', JSON.stringify(resultFilter))
}
