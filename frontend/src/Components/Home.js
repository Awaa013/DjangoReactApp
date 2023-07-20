/*Importation des bibliotheques necessaires et les images pour le carousel*/
import Carousel from 'react-bootstrap/Carousel';
import Slide01 from '../static/Skin2.jpg';
import Slide02 from '../static/Skin1.jpg';
import Slide03 from '../static/Skin3.jpg';

const Home = () => {
  return (
    <div className='row'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide01}
          alt="Produit1"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide02}
          alt="Produit2"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide03}
          alt="Produit3"
        />

      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;
