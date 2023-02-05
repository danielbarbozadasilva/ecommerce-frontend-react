import styled from 'styled-components'
import { Input } from '@material-ui/core'

export const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 130px;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`

export const SImageStyle = styled.div`
  flex: 2;
  flex-direction: column;
`

export const MainPhoto = styled.div`
  display: flex;
  justify-content: center;
`

export const SmallPhoto = styled.div`
  display: inline;
  margin: 0px 20px;
  border: 3px solid #ccc;
  @media (max-width: 570px) {
    display: none;
  }
`

export const ProductDetails = styled.div`
  flex: 2;
`

export const DisplayQuantity = styled.div`
  margin-bottom: 30px;
  width: 60px;
`

export const SButton = styled.button`
  margin: 0px 50px;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: #473f57;
  line-height: 38px;
  text-transform: uppercase;
  padding: 0 15px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;

  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const SInputQuantity = styled(Input)`
  font-size: 1.2rem;
  padding: 10px 17px;
  margin: 5px 0;
  max-width: 65px;
  border: 1px solid #999;
`

export const SDescriptionPrice = styled.h2`
  text-decoration: line-through;
  font-size: 18px;
`

export const SDescriptionPromotion = styled.h1`
  font-size: 26px;
`

export const SDescriptionInstallments = styled.h2`
  font-size: 15px;
`
