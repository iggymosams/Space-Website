import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';
import Stars from '../../components/stars/stars';
import './home.css';

const Home = () => {
    return (
        <div
            className="home noselect"
            onContextMenu={(e) => e.preventDefault()}
        >
            <div className="home__container">
                <h1 className="home__title">IGGYMOSAMS'S SPACE WEBSITE</h1>
                <div className="homeNav">
                    <Link className="homeNav__link" to="/apod">
                        APOD
                    </Link>
                    {/* <Link className="homeNav__link" to="/jwst">
                        JWST
                    </Link> */}
                    <Link className="homeNav__link" to="/launches">
                        Launches
                    </Link>
                </div>
            </div>
            <Stars />
        </div>
    );
};

export default Home;
