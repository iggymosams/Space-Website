import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import APOD from './pages/APOD/APOD';
import Home from './pages/home/Home';
import NoPage from './pages/NoPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/apod" element={<APOD />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
