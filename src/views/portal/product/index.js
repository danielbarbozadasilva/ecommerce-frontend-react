import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import ContainerHero from '../../../components/portal/product/hero/index'
import ContainerDescription from '../../../components/portal/product/description/index'
import ContainerRating from '../../../components/portal/product/rating/index'
import ContainerForm from '../../../components/portal/product/rating/form/index'
import RelatedProducts from '../../../components/portal/cards/product/index'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../../components/loading/page/index'
import { listByIdProduct } from '~/store/product/product.action'
import { createRating } from '~/store/rating/rating.action'
import TitleSection from '../../../components/dashboard/title/index'
import { isAuthenticated } from '../../../config/auth'
import { ContainerRelatedProducts, STextFormated } from './styled'
import { listByIdCategory } from '~/store/category/category.action'
import { Col } from 'react-bootstrap'

const ProductDetails = (props) => {
  const product = useSelector((state) => state.product.productById)
  const categoryProducts = useSelector((state) => state.category.categoryProducts)
  const loading = useSelector((state) => state.product.loading)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listByIdProduct(props.productid)).then(
      dispatch(listByIdCategory(product.category))
    )
  }, [dispatch])

  const submitRating = (form) => {
    dispatch(createRating(form)).then(
      dispatch(listByIdProduct(props.productid))
    )
  }

  if (loading) {
    return <Loading />
  }

  const RelatedProductsList = (categoryProducts) => {
    return categoryProducts?.data.map((item, i) => {
      return (
        <Col md="6" xl="4" sm="12" xs="12" key={i}>
          <RelatedProducts item={{ ...item }} />
        </Col>
      )
    })
  }
  return (
    <div>
      <Helmet title={props.title} />

      <ContainerHero data={product} />

      <TitleSection title="Descrição" />
      <ContainerDescription description={product.description} />

      <TitleSection title="Avaliações" />
      <ContainerRating data={product} />

      <TitleSection title="Produtos Relacionados" />
      <ContainerRelatedProducts>
        {!loading && categoryProducts?.data.length === 0 ? (
          <STextFormated>
            <h6>Não há produtos disponiveis</h6>
          </STextFormated>
        ) : (
          RelatedProductsList(categoryProducts)
        )}
      </ContainerRelatedProducts>

      {isAuthenticated() ? (
        <>
          <TitleSection title="Deixe o seu comentário" />
          <ContainerForm id={product.id} submit={submitRating} />
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default ProductDetails
