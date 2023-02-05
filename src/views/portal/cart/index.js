import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import DataCart from '~/components/cart/dataCart'
import HeadCart from '~/components/cart/headCart'
import Loading from '~/components/loading/page'
import CartProduct from '../../../components/cart/cartProduct/index'
import { ContainerCart, STextFormated, TitleCart } from './styled'

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.all)
  const loading = useSelector((state) => state.cart.loading)

  const CartProductList = (cart) => {
    return cart?.map((item, i) => {
      return <CartProduct key={i} item={{ ...item }} />
    })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Helmet title={props.title} />
      <TitleCart>Detalhes do Carrinho</TitleCart>
      {cart?.length === 0 ? (
        <STextFormated>
          <h6>O seu carrinho está vazio.</h6>
        </STextFormated>
      ) : (
        <>
          <HeadCart />
          <ContainerCart>{CartProductList(cart)}</ContainerCart>
          <DataCart data={cart} />
        </>
      )}
    </div>
  )
}

export default Cart
