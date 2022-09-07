import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Stars from '../../components/stars/stars';
import './home.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Home | IGGYMOSAMS SPACE WEBSITE';
    }, []);

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
