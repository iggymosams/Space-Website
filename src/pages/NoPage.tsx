import React from 'react';
import { useLocation } from 'react-router-dom';
const NoPage = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                404 No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
};

export default NoPage;
