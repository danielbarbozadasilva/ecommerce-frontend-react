import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '~/components/loading/page'
import { createPayment } from '~/store/payment/payment.action'
import { createSolicitation } from '~/store/solicitation/solicitation.action'
import FormCheckout from '../../../components/cart/checkout/index'
import { isAuthenticated } from '../../../config/auth'
import SignIn from '../../auth/signin'

const Checkout = (props) => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.payment.loading)

  const submitForm = async (form) => {
    dispatch(createSolicitation(form)).then((resp) => {
      const senderHash = PagSeguroDirectPayment.getSenderHash()
      const { data } = resp.data
      dispatch(
        createPayment(data.solicitation.payment, senderHash, data.paymentType)
      )
    })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      {isAuthenticated() ? (
        <>
          <Helmet title={props.title} />
          <FormCheckout data={props.location.state} submit={submitForm} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  )
}
export default Checkout
