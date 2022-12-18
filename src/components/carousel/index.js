import Carousel from 'react-bootstrap/Carousel';
import Image01 from '../../assets/img/header01.png'
import Image02 from '../../assets/img/header02.png'
import Image03 from '../../assets/img/header03.png'
import {SCarousel} from './styled'

function CarouselUncontrolled() {
  return (
    <SCarousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image01}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image02}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image03}
        />
      </Carousel.Item>
    </SCarousel>
  );
}

export default CarouselUncontrolled;