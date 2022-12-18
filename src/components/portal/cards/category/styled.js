import styled from 'styled-components'

export const SCard = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 30%;
  padding: 7px 7px 45px;
  position: relative;
  background-color: #fff;
  height: 230px;
  width: 310px;
  margin: 50px auto;
  text-align: center;
  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const SCardImg = styled.img`
  border-radius: 30%;
  width: 170px;
  height: 170px;
  margin: 0 auto;;
  object-fit: cover;
`

export const SButton = styled.button`
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: #473f57;
  line-height: 38px;
  text-transform: uppercase;
  padding: 0 15px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  display: inline-flex;
  align-items: center;

  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const SCardPrice = styled.h6`
  text-decoration: line-through;
`

export const SCardPromotion = styled.h5``
