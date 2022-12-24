import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

export const SForm = styled(Form)`
  width: 40%;
  margin: 4% 7.7%;
`

export const SButton = styled.button`
  display: flex;
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
