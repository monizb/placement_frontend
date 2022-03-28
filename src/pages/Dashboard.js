import React from "react";
import Navbar from "../components/Navbar";

import DatafetchingBody from "../components/student_/Datafetching/DatafetchingBody";
import BodyLeft from "../components/student_/BodyLeft";
import BodyRight from "../components/student_/BodyRight";
function Dashboard({ name }) {
    return (
        <div>
            <div>
                <Navbar name='Sign Out' />
            </div>
            <div className='background'>
                <h1>Welcome to the {name} Dashboard Page</h1>
                <div style={{ marginTop: "30px" }}>
                    {/* <Header /> */}
                    <div
                        style={{
                            display: "flex",
                            height: "100%",
                            justifyContent: "space-between",
                            backgroundColor: "rgb(196, 196, 196)",
                        }}
                    >
                        <BodyLeft />
                        <DatafetchingBody />
                        <BodyRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
