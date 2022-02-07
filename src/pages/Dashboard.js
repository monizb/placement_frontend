import React from "react";
import Navbar from "../components/Navbar";
function Dashboard({ name }) {
    return (
        <div>
            <div>
                <Navbar name='Sign Out' />
            </div>
            <div className='background'>
                <h1>Welcome to the {name} Dashboard Page</h1>
            </div>
        </div>
    );
}

export default Dashboard;
