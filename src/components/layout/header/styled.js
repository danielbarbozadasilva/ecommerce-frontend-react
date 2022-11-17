import styled from 'styled-components'
import { Container, Col, Navbar } from 'react-bootstrap'

export const SNavbar = styled(Navbar)`
  width: 100%;
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  background-color: #f6f7fc;
  color: #473f57;
  font-weight: bold;
  z-index: 1;
  @media screen and (max-width: 990px) {
    background-color: #f6f7fc;
  }
`

export const SLink = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  text-decoration: none;
  top: 0;
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 1.5;
  list-style: none;
  padding-left: 50px;
  &:hover {
    text-decoration: underline;
    color: white;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 990px) {
    text-align: center;
    &:hover {
      background-color: #f6f7fc;
    }
  }
  @media screen and (max-width: 1670px) {
    padding: 25px 40px;
  }
`

export const SNavbarLogo = styled.img`
  width: 11rem;
  height: 4rem;
  margin: 5px 40px;
  @media screen and (max-width: 470px) {
    width: 11.5rem;
    margin: 5px 20px;
  }
`

export const SNavbarToggle = styled(Navbar.Toggle)`
  margin: 0px 30px;
  background-color: #f6f7fc;
  color: #a59174 !important;
`