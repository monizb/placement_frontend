import React from 'react';
import { Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard.js';

const TpoRoutes = () => {

    return (
        <>
            <Route path="/tpo/dashboard" element={<Dashboard name='TPO' />} />
            <Route path="/tpo/profile" element={<Dashboard name='Profile' />} />
        </>
    );

}
export default TpoRoutes;