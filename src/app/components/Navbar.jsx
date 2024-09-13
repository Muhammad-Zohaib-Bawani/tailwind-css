import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {



    return (
        <div class="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className='logo-div'>
                    <a href="https://yourjunkremoved.com/" class="navbar-brand d-flex align-items-center">
                        <img src="https://yourjunkremoved.com/wp-content/uploads/2022/06/Your-Junk-Removed_logo-01-300x78.png" alt="logo" class="img-fluid mx-3 my-2 img-logo" style={{ maxWidth: "200px",height: "auto"}}/>
                    </a>

                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link px-4" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-4" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-4" href="#">Our Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-4" href="#">Junk Removal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-4" href="#">Dumpster Rental</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-4" href="#">Moving Services</a>
                        </li>
                    </ul>
                </div>


                <div className='nav-sec container '>
                    <button className='nav-button' type="button">
                        REQUEST A FREE  ESTIMATE
                    </button>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
