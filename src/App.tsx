import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
