import 'bootstrap/js/src/collapse.js'
import './styles.css'
import { ReactComponent as MenuHamburgerIcon } from 'assets/images/menu-hamburguer.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
      <div className="container-fluid">
        <a href="link">
          <h4>Carros Top</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuHamburgerIcon />
        </button>

        <div
          className="collapse navbar-collapse menu-itens-container"
          id="dscatalog-navbar"
        >
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
