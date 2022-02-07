import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginIcon from "../assets/aac.png";
import "../styles/Background.css";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const register = () => {
        let url = 'https://acharya-placement-dev.herokuapp.com/api/auth/student/signup';
        let user = {
            displayName: name,
            email: email,
            password: pass
        };
        axios.post(url, user)
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                if (res.data.success === 'false') {
                    toast.error(res.error.message);
                } else {
                    // console.log(res.data.message);
                    navigate("/student/dashboard");
                }
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.data.error.message) {
                        // console.log(error.response.data.error.message);
                        toast.error(error.response.data.error.message);
                    }
                    else {
                        // console.log(error.response.data.error);
                        toast.error(error.response.data.error);
                    }
                }
            });
    }
    return (
        <div>
            <div ><Navbar name='Sign In' /></div>
            <div className='background' >
                <ToastContainer />
                <div className='LoginForm' style={{ borderRadius: 12, backgroundColor: 'white', padding: 65, margin: 'auto', justifyContent: 'center', alignItems: 'center', height: 'fit-content', width: 'fit-content' }} >
                    <img className="LoginIcon" src={LoginIcon} alt="logo" />
                    <h2 style={{ marginTop: 30, backgroundColor: '#283679', fontFamily: "Nunito", color: 'white', padding: 8, borderRadius: 3, paddingInline: 100 }}>Student</h2>
                    <TextField label="Name" variant="outlined" margin="dense" style={{ marginTop: 15, width: '100%' }}
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <TextField label="Email" variant="outlined" margin="dense" style={{ marginTop: 15, width: '100%' }}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <TextField label="Password" variant="outlined" margin="dense" style={{ marginTop: 15, width: '100%' }}
                        type="password" value={pass} onChange={(e) => setPass(e.target.value)}
                    />
                    <br />
                    <Button variant="contained" onClick={register} style={{ backgroundColor: 'orange', marginTop: 25, fontSize: 16, fontFamily: "Nunito", paddingInline: 30 }}>Register</Button>
                </div>
            </div>
        </div>
    );
}

export default Register;
