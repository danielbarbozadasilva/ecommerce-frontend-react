import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { SForm, STextForm, SImageStyle, SButton } from './styled'
import paymentSuccess from '../../../../assets/img/payment-success.png'
import { navigate } from '@reach/router'

const CreditCardSuccess = (props) => {
  return (
    <Container>
      <Helmet title={props.title} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <SForm>
            <SImageStyle src={paymentSuccess}></SImageStyle>
            <STextForm>Pedido concluído com sucesso!</STextForm>
            <h5>
              O seu pagamento está sendo processado e você receberá uma
              confirmação por e-mail em breve.
            </h5>
            <SButton onClick={() => navigate('/')}>
              Voltar a página inicial
            </SButton>
          </SForm>
        </Col>
      </Row>
    </Container>
  )
}
export default CreditCardSuccess
