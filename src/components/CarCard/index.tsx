import './styles.css'
import car from 'assets/images/car-card-1.png'

const CarCard = () => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={car} alt="Carro" />
      </div>
      <div className="card-content-container">
        <div>
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div>
          <a href="link" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </div>
  )
}

export default CarCard
