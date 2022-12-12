import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading/page/index'
import { Col } from 'react-bootstrap'
import CardProduct from '../../../components/portal/cards/product/index'
import CardCategory from '../../../components/portal/cards/category/index'
import {
  ContainerImage,
  ContainerCards,
  ContainerCategories,
  STextPromotion,
  STextFormated,
  settings
} from './styled.js'
import {
  listAllCategories,
  listByIdCategory
} from '../../../store/category/category.action'
import CarouselUncontrolled from '../../../components/carousel/index'
import Slider from 'react-slick'
import Helmet from 'react-helmet'

function CategoryProducts(props) {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.all)
  const product = useSelector((state) => state.category.categoryById)
  const loading = useSelector((state) => state.product.loading)

  useEffect(() => {
    dispatch(listAllCategories())
    dispatch(listByIdCategory(props.categoryid))
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

  const CategoryList = (categories) => {
    return categories.map((item, i) => {
      return (
        <Col md="6" xl="4" sm="12" xs="12" key={i}>
          <CardCategory item={{ ...item }} />
        </Col>
      )
    })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Helmet title={props.title} />
      <ContainerImage>
        <CarouselUncontrolled />
      </ContainerImage>
      <ContainerCategories>
        {!loading && categories.length === 0 ? (
          <h6>Não há categorias disponiveis</h6>
        ) : (
          <Slider {...settings}>{CategoryList(categories)}</Slider>
        )}
      </ContainerCategories>
      <STextPromotion>
        <h2>Produtos</h2>
      </STextPromotion>
      <ContainerCards>
        {!loading && product.length === 0 ? (
          <STextFormated>
            <h6>Não há produtos disponiveis</h6>
          </STextFormated>
        ) : (
          ProductList(product)
        )}
      </ContainerCards>
    </>
  )
}
export default CategoryProducts
