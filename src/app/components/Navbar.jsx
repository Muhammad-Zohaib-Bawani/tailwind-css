import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  
   

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='logo-div'>
                    <a href="https://yourjunkremoved.com/" className="navbar-brand">
                        <img className='nav-logo' src="https://yourjunkremoved.com/wp-content/uploads/2022/06/Your-Junk-Removed_logo-01-300x78.png" alt="" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Junk Removal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dumpster Rental</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Moving Services</a>
                        </li>
                    </ul>
                </div>
                <div className='nav-sec'>
                    <a href="/request-a-free-estimate">
                        <button className='nav-button' type="button">
                            REQUEST A FREE <br /> ESTIMATE
                        </button>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
