import { getAuth, signOut } from "firebase/auth";
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../assets/acharya-logo-1.png";
import "../styles/Navbar.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

function Navbar({ name }) {
    let navigate = useNavigate();
    const signout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("signout successful");
            navigate('/login');
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    const handleClick = () => {
        if (name === 'Sign In') {
            navigate('/login');
        }
        else if (name === 'Sign Up') {
            navigate('/register');
        }
        else if (name === 'Sign Out') {
            signout();
        }
    }
    const toggleHome = () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const role = await user.getIdTokenResult().then(idTokenResult => idTokenResult.claims.roles[0]);
                let path = '/' + role + '/dashboard';
                return navigate(path);
            }
            return navigate('/');
        });
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
                        <Button variant="text" onClick={toggleHome} style={{ marginRight: 22, color: "#ffffff", height: "fit-content", fontSize: 16, fontFamily: "Nunito", fontWeight: "bold" }}>Home</Button>
                        <Button variant="text" style={{ marginRight: 22, color: "#ffffff", height: "fit-content", fontSize: 16, fontFamily: "Nunito", fontWeight: "bold" }}>About</Button>
                        <Button variant="text" style={{ marginRight: 22, color: "#ffffff", height: "fit-content", fontSize: 16, fontFamily: "Nunito", fontWeight: "bold" }}>Contact Us</Button>
                        <Button variant="contained" onClick={handleClick} style={{ color: "#283679", height: "fit-content", backgroundColor: "white", borderRadius: 3, border: "none", padding: "7px 20px", fontSize: 16, fontFamily: "Nunito", fontWeight: "bold" }}>{name}</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
