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
  listAllProducts,
  searchProducts
} from '../../../store/product/product.action'
import { listAllCategories } from '../../../store/category/category.action'
import CarouselUncontrolled from '../../../components/carousel/index'
import Slider from 'react-slick'
import Helmet from 'react-helmet'
import PaginationSelector from '../../../components/paginate/selector/index'
import PaginationComponent from '../../../components/paginate/index'

function Home(props) {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.all)
  const categories = useSelector((state) => state.category.all)
  const loading = useSelector((state) => state.product.loading)
  const [itensPerPage, setItensPerPage] = React.useState(5)
  const [currentPage, setCurrentPage] = React.useState(0)

  useEffect(() => {
    dispatch(listAllProducts(itensPerPage, currentPage))
    dispatch(listAllCategories())
  }, [itensPerPage, currentPage])

  useEffect(() => {
    if (props.search) {
      dispatch(searchProducts(props.search, itensPerPage, currentPage))
    }
  }, [dispatch])

  const ProductList = (product) => {
    return product?.data?.map((item, i) => {
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
  const pages = Math.ceil(product?.countDocs / itensPerPage)

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
        <h2>Ofertas de Hoje!</h2>
      </STextPromotion>
      <ContainerCards>
        {!loading && product?.data?.length === 0 ? (
          <STextFormated>
            <h6>Não há produtos disponiveis</h6>
          </STextFormated>
        ) : (
          ProductList(product)
        )}
      </ContainerCards>
      <PaginationSelector
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
      />
      <PaginationComponent
        pages={pages}
        currentPage={currentPage}
        itensPerPage={itensPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}
export default Home
