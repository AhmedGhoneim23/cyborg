import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt='' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link to="/" className="nav-link" style={{"color" : "#cc00ff"}}>Home</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">Browse</Link></li>
                    <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/" className="dropdown-item">Fortnite</Link></li>
                            <li><Link to="/" className="dropdown-item">Call of Duty</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link to="/" className="nav-link">Streams</Link></li>
                    <li className="nav-item"><Link to="./profile" className="nav-link" style={{"color" : "#cc00ff"}}>Profile</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header