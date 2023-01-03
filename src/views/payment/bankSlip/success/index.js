import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { SForm, STextForm, SImageStyle, SButton } from './styled'
import paymentSuccess from '../../../../assets/img/payment-success.png'
import { navigate } from '@reach/router'

const BankSlipPaymentSuccess = (props) => {
  return (
    <Container>
      <Helmet title={props.title} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <SImageStyle src={paymentSuccess}></SImageStyle>
            <STextForm>Pedido concluído com sucesso!</STextForm>
            <h5>
              Para finalizar o pedido, realize o pagamento do boleto pelo link
              abaixo:
            </h5>
            <SButton
              onClick={() =>
                navigate(props.location.state.bankSlip.data.paymentLink)
              }
            >
              Imprimir boleto
            </SButton>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default BankSlipPaymentSuccess
