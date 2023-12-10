import React, { useContext } from "react";
import Context from "../context/GlobalState";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="mt-0">Sivusto</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Koti
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Urheilijoiden listaus
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
