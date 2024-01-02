import React from 'react';

const Navbar = () => {
  return (
        <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">All Products</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>
              
              </ul>
              <button className="btn btn-outline-success" type="submit">Cart</button>

            </div>
          </div>
      </nav>
      </div>
        
    </>
  );
};

export default Navbar;
