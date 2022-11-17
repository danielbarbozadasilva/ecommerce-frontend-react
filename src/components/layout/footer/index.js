import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaCcMastercard,
  FaCcVisa,
  FaBarcode
} from 'react-icons/fa'
import { MdLocationOn, MdMailOutline, MdPhone } from 'react-icons/md'
import {
  SContainer,
  WebsiteRights,
  ColCopyright,
  ColInfo,
  IconStyle,
  FooterLinkTitle,
  FooterName,
  SContainerCopyright
} from './styled'

const Footer = () => {
  return (
    <>
      <SContainer fluid>
        <Row>
          <Col>
            <ColInfo>
              <FooterLinkTitle>REDES SOCIAIS</FooterLinkTitle>
              <IconStyle
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </IconStyle>
              <IconStyle
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </IconStyle>
              <IconStyle
                href="https://api.whatsapp.com/send?phone=5521982187814"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare />
              </IconStyle>
            </ColInfo>
          </Col>

          <Col>
            <ColInfo>
              <FooterLinkTitle>Informações</FooterLinkTitle>
              <WebsiteRights>
                <MdLocationOn /> Endereço: Rua Gomes Yunes, 225
              </WebsiteRights>
              <WebsiteRights>
                <MdMailOutline /> E-mail: contato@primetech.com
              </WebsiteRights>
              <WebsiteRights>
                <MdPhone /> Telefone: +55 (21) 2245-0548
              </WebsiteRights>
            </ColInfo>
          </Col>

          <ColInfo>
            <FooterLinkTitle>FORMAS DE PAGAMENTO</FooterLinkTitle>
            <IconStyle>
              <FaCcMastercard />
            </IconStyle>
            <IconStyle>
              <FaCcVisa />
            </IconStyle>
            <IconStyle>
              <FaBarcode />
            </IconStyle>
          </ColInfo>
        </Row>
      </SContainer>

      <SContainerCopyright fluid>
        <Row>
          <ColCopyright>
            <FooterName>Developed by Daniel Barboza</FooterName>
            <FooterName>
              Copyright © 2021 - Todos os direitos reservados
            </FooterName>
          </ColCopyright>
        </Row>
      </SContainerCopyright>
    </>
  )
}

export default Footer
