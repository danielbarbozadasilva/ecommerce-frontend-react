import styled from 'styled-components'

export const SPriceSolic = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-left: 70%;
  padding: 1%;
`

export const SColumnPrice = styled.div``

export const SPrice = styled.div`
  margin-left: 7%;
`

export const SPriceButton = styled.button`
  margin-left: 7%;
  text-align: center;
  font-size: 16px;
  border: 1px solid #484058;
  padding: 5px 25px;
  background-color: #484058;
  color: #f8f9fa;
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

export const SFinishButton = styled.button`
  margin-left: 7%;
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

export const STotalPrice = styled.div`
  display: flex;
  margin-left: 70%;
  padding: 1%;
`
