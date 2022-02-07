import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import LoginIcon from "../assets/aac.png";
import "../styles/Background.css";

function LoginAs() {

    const navigate = useNavigate();

    const handleClick = (index) => {
        if (index === 1) {
            navigate("/login/admin");
        }
        else if (index === 2) {
            navigate("/login/tpo");
        }
        else if (index === 3) {
            navigate("/login/faculty");
        }
        else if (index === 4) {
            navigate("/login/student");
        }
    };

    return (
        <div>
            <div ><Navbar name='Sign Up' /></div>
            <div className='background' >

                <div className='LoginForm' style={{ borderRadius: 12, backgroundColor: 'white', padding: 65, margin: 'auto', justifyContent: 'center', alignItems: 'center', height: 'fit-content', width: 'fit-content' }} >
                    <img className="LoginIcon" src={LoginIcon} alt="logo" />
                    <br></br> <Button onClick={() => handleClick(1)} style={{ marginTop: 30, backgroundColor: '#283679', fontFamily: "Nunito", color: 'white', padding: 8, borderRadius: 3, width: 250 }}>Admin</Button>
                    <br></br> <Button onClick={() => handleClick(2)} style={{ marginTop: 30, backgroundColor: '#283679', fontFamily: "Nunito", color: 'white', padding: 8, borderRadius: 3, width: 250 }}>TPO</Button>
                    <br></br> <Button onClick={() => handleClick(3)} style={{ marginTop: 30, backgroundColor: '#283679', fontFamily: "Nunito", color: 'white', padding: 8, borderRadius: 3, width: 250 }}>Faculty</Button>
                    <br></br> <Button onClick={() => handleClick(4)} style={{ marginTop: 30, backgroundColor: '#283679', fontFamily: "Nunito", color: 'white', padding: 8, borderRadius: 3, width: 250 }}>Student</Button>
                </div>
            </div>
        </div>
    );


}

export default LoginAs;
