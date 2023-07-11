// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
      className="image"
    />
    <h1 className="heading">Wave</h1>
    <ul className="nav-item">
      <li>
        <Link className="nav-new" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-new" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-new" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
