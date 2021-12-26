import CarCard from 'components/CarCard'
import SearchCard from 'components/SearchCard'
import './styles.css'

const Catalog = () => {
  return (
    <div className="container mr-0">
      <div className="catalog-container">
        <div className="container mt-4 mb-sm-3">
          <SearchCard />
        </div>
        <div className="container product-container">
          <div className="row d-flex">
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 mb-sm-2">
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Catalog
