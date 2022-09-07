import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navBar">
            <nav>
                <ul>
                    <Link className="navBar__link" to="/">
                        Home
                    </Link>

                    <Link className="navBar__link" to="/apod">
                        APOD
                    </Link>
                    {/* 
                    <Link className="navBar__link" to="/jwst">
                        JWST
                    </Link> */}
                    <Link className="navBar__link" to="/launches">
                        Launches
                    </Link>
                </ul>

                {/* <Link to="/apod">APOD</Link>

            <Link to="/jwst">JWST</Link>

            <Link to="/launches">LAUNCHES</Link> */}
            </nav>
        </div>
    );
};

export default Navbar;
