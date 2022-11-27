import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading/page/index'
import { Col } from 'react-bootstrap'
import CardProduct from '../../../components/portal/cards/product/index'
import { navigate } from '@reach/router'
import {
  ContainerImage,
  StyleImg,
  ContainerTitle,
  TextTitle,
  ContainerCards,
  SButtonTitle
} from './styled.js'
import { listAllProducts } from '../../../store/product/product.action'
import Image from '../../../assets/img/header.jpg'

function Home() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.all)
  const loading = useSelector((state) => state.product.loading)

  useEffect(() => {
    dispatch(listAllProducts())
  }, [dispatch])

  const ProductList = (product) => {
    return product.map((item, i) => {
      return (
        <Col md="6" xl="4" sm="12" xs="12" key={i}>
          <CardProduct item={{ ...item }} />
        </Col>
      )
    })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <ContainerImage>
        <StyleImg src={Image} />
      </ContainerImage>

      <ContainerTitle>
        <TextTitle>
          <h1>
            <strong>O poder da nova geração...</strong>
            <br />
            A placa mais rápida do mundo!
          </h1>
        </TextTitle>
        <SButtonTitle onClick={() => navigate(`/signup`)}>
          Garanta já
        </SButtonTitle>
      </ContainerTitle>

      <ContainerCards>
        {!loading && product.length === 0 ? (
          <h6>Não há produtos disponiveis</h6>
        ) : (
          ProductList(product)
        )}
      </ContainerCards>
    </>
  )
}
export default Home
