import styled from 'styled-components'

export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
}

export const ContainerCategories = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  width: 85%;
  margin: 60px auto;
`

export const ContainerImage = styled.div`
  margin-bottom: 100px;
`

export const STextFormated = styled.div`
  margin-top: 70px;
  margin-bottom: 30px;
  margin-left: 180px;
`

export const ContainerCards = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`

export const STextPromotion = styled.div`
  margin-top: 140px;
  margin-bottom: 30px;
  margin-left: 160px;
  border-left: 1px solid;
  padding-left: 20px;
`
