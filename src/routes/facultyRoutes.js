import React from 'react';
import { Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard.js';

const FacultyRoutes = () => {

    return (
        <>
            <Route path="/faculty/dashboard" element={<Dashboard name='faculty' />} />
            <Route path="/faculty/profile" element={<Dashboard name='Profile' />} />
        </>
    );

}
export default FacultyRoutes;