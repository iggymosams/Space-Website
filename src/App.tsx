import { queryAllByAltText } from '@testing-library/react';
import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes,
    useLocation,
} from 'react-router-dom';
import APOD from './pages/APOD/APOD';
import Home from './pages/home/Home';
import Launches from './pages/launches/launches';
import NoPage from './pages/NoPage';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
    let query = useQuery();
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route
                path="/apod"
                element={<APOD queryDate={query.get('date')} />}
            />
            <Route path="/launches" element={<Launches />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
}

export default App;
