import React from 'react';
import { Route } from "react-router-dom";

import Dashboard from '../pages/Dashboard.js';

const AdminRoutes = () => {

    return (
        <>
            <Route path="/admin/dashboard" element={<Dashboard name='Admin' />} />
            <Route path="/admin/profile" element={<Dashboard name='Profile' />} />
        </>
    );

}
export default AdminRoutes;