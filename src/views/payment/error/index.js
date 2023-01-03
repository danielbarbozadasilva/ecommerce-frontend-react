import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { SForm, STextForm, SImageStyle, SButton } from './styled'
import paymentError from '../../../assets/img/payment-error.png'
import { navigate } from '@reach/router'

const BankSlipPaymentError = (props) => {
  return (
    <Container>
      <Helmet title={props.title} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <SImageStyle src={paymentError}></SImageStyle>
            <STextForm>Ocorreu um erro ao processar o pedido!</STextForm>
            <h5>
              Parace que ocorreu um erro ao processar o seu pedido, volte para o
              carrinho e tente novamente:
            </h5>
            <SButton onClick={() => navigate('/cart')}>
              Voltar ao carrinho
            </SButton>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}

export default BankSlipPaymentError
