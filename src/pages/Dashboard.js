import React from "react";
import Navbar from "../components/Navbar";
function Dashboard() {
    return (
        <div>
            <div>
                <Navbar name='Sign Out' />
            </div>
            <div className='background'>
                <h1>Welcome to the Dashboard Page</h1>
            </div>
        </div>
    );
}

export default Dashboard;
