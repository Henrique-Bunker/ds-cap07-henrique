import 'bootstrap/js/src/collapse.js'
import './styles.css'
import { ReactComponent as MenuHamburgerIcon } from 'assets/images/menu-hamburguer.svg'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
      <div className="container-fluid">
        <Link to="/">
          <h4>Carros Top</h4>
        </Link>
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
              <NavLink to="/" className="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Catálogo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
