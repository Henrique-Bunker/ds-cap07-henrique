import './styles.css'
import './catStyles.css'
import car from 'assets/images/car-header-1.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page-container">
      <div className="home-container">
        <div className="home-card bg-primary">
          <div className="home-image-container">
            <img src={car} alt="" />
          </div>
          <div className="home-content-container">
            <h6>O carro perfeiro para você</h6>
            <p>
              Conheça nossos carror e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
      </div>
      <div className="catalog-container">
        <div className="catalog-card">
          <Link to="/products" className="btn btn-primary">
            Ver Catálogo
          </Link>
          <span>Comece agora a navegar</span>
        </div>
      </div>
    </div>
  )
}

export default Home
