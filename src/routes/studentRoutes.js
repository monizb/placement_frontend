import React from 'react';
import { Route } from "react-router-dom";
import HomeSec from '../components/student_/HomeSec.js';
import Myprofile from '../components/student_/Myprofile.js';
import CalendarOfEvents from '../pages/Calendar.js';
import Dashboard from '../pages/Dashboard.js';

const StudentRoutes = () => {

    return (
        <Route >
            <Route exact path="/student/dashboard" element={<Dashboard name='Student' />} />
            <Route exact path="/student/profile" element={<Myprofile />} />
            <Route exact path="/student/calendar" element={<CalendarOfEvents />} />
            <Route exact path="/student/jobs/details/:id" element={<HomeSec />} />

        </Route>
    );

}
export default StudentRoutes;