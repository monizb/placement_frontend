import React from 'react';
import { Route } from "react-router-dom";
import CalendarOfEvents from '../pages/Calendar.js';
import Dashboard from '../pages/Dashboard.js';

const StudentRoutes = () => {

    return (
        <Route >
            <Route exact path="/student/dashboard" element={<Dashboard name='Student' />} />
            <Route exact path="/student/profile" element={<Dashboard name='Profile' />} />
            <Route exact path="/student/calendar" element={<CalendarOfEvents />} />
        </Route>
    );

}
export default StudentRoutes;