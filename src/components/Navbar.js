// import AppBar from "@mui/material/AppBar";
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../assets/acharya-logo-1.png";
import "../styles/Navbar.css";


function Navbar({ name }) {
    let buttonName = name;
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    }
    return (
        <div>
            <AppBar style={{ backgroundColor: "#283679", padding: 6, boxShadow: "none" }}>
                <Toolbar>
                    <Box display="flex" style={{ alignItems: "center" }} flexGrow={1}>
                        <img className="Logo" src={Logo} alt="logo" />
                        <h3 style={{ marginLeft: 5 }}>Placement Cell</h3>
                    </Box>
                    <Box display="flex" style={{ alignItems: "center" }} flexGrow={0}>
                        <h3 style={{ marginRight: 22 }}>Home</h3>
                        <h3 style={{ marginRight: 22 }}>About</h3>
                        <h3 style={{ marginRight: 22 }}>Contact Us</h3>
                        <Button variant="contained" onClick={routeChange} style={{ color: "#283679", height: "fit-content", backgroundColor: "white", borderRadius: 3, border: "none", padding: "7px 20px", fontSize: 16, fontFamily: "Nunito", fontWeight: "bold" }}>{buttonName}</Button>
                    </Box>

                </Toolbar>
                {/* <div style={{ display: "flex", alignItems: "center", marginLeft: 10 }}>
                    <img className="Logo" src={Logo} alt="logo" />
                    <h3 style={{ marginLeft: 5 }}>Placement Cell</h3>
                    <h3 style={{ marginLeft: 5, alignItems: "flex-end" }}>Home</h3>
                    <h3>About</h3>
                    <h3>Login</h3>
                    <h3>Contact Us</h3>
                </div> */}
            </AppBar>
        </div>
    );
}

export default Navbar;
