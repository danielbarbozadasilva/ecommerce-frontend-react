import React from 'react'
import { Helmet } from 'react-helmet'

const CheckoutContainer = () => {
  return (
    <div>
      <Helmet>
        <script
          type="text/javascript"
          src="https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js"
        ></script>
      </Helmet>
      <h2>dsdsd</h2>
    </div>
  )
}
export default CheckoutContainer
