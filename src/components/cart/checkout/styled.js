import { Form, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const SForm = styled(Form)`
  padding: 50px;
  position: center;
  @media screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
`

export const SRow = styled(Row)`
  margin-bottom: 2%;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`

export const SFormGroup = styled(Row)`
  @media screen and (max-width: 990px) {
    padding-bottom: 5%;
  }
`

export const STextForm = styled.h2`
  line-height: 1.5;
  font-weight: 500;
  margin: 70px 0px 30px 0px;
  padding-bottom: 10px;
  font-size: 24px;
  border-bottom: 1px solid #ccc;
`

export const SButton = styled.button`
  text-align: center;
  font-size: 16px;
  border: 1px solid #484058;
  padding: 5px 25px;
  background-color: #484058;
  color: #f8f9fa;
  margin: 30px 0px;
  &:hover {
    text-decoration: underline;
    background-color: #ccc;
    transition: 0.5s ease-out;
  }
  :disabled {
    text-align: center;
    font-size: 16px;
    border: 1px solid #484058;
    background-color: white;
    padding: 5px 25px;
    color: #473f56;
    margin: 30px 0px;
  }
`
