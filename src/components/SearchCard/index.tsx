import './styles.css'

const SearchCard = () => {
  return (
    <div className="input-group mb-3 search-container">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Digite sua busca"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <a href="link" className="btn btn-primary btn-search" id="button-addon2">
        Buscar
      </a>
    </div>
  )
}

export default SearchCard
