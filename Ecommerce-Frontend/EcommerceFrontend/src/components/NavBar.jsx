import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RoleNavbar from './RoleNavbar';

const { Fragment } = require('react');

function NavBar() {
  const state = useSelector((state) => state);
  console.log('LoggedIn ', state.loggedin);
  console.log('Cart ', state.cart);
  return (
    <Fragment>
      <div className="clearfix"></div>
      <nav
        className="navbar navbar-expand-lg navbar-light position-sticky"
        style={{ top: 0, zIndex: '100',background: '#7fa629' }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-light"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/">
                HOME
              </Link>
            </li>

            {/* <li className="nav-item dropdown"> */}
            <li className="nav-item ">
              <Link
                className="nav-link  text-light"
                // className="nav-link dropdown-toggle text-light"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CATEGORIES
              </Link>
              <div
                className="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/cat/Men/Upper Wear">
                  COLORED
                </Link>
                <Link className="dropdown-item" to="/cat/Men/Bottom Wear">
                  RED
                </Link>
              </div>
            </li>
          </ul>
          <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
