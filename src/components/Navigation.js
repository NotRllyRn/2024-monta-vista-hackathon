import logo from '../logo.svg';
import './App.css';

function Navigation() {
  return (
    <div className="Navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />
                SLAPs
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navigation;
