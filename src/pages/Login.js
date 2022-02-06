import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { TextField, Button } from '@mui/material';
import LoginIcon from "../assets/aac.png";
import "../styles/Background.css";
function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const history = useNavigate();

    const login = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                history("/dashboard");
                console.log('login success');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                console.log(error);
            });
    }

        ;
    return (
        <div>
            <div ><Navbar name='Sign Up' /></div>
            <div className='background' >
                <div className='LoginForm' style={{ borderRadius: 12, backgroundColor: 'white', padding: 65, margin: 'auto', justifyContent: 'center', alignItems: 'center', height: 'fit-content', width: 'fit-content' }} >
                    <img className="LoginIcon" src={LoginIcon} alt="logo" />
                    <h2 style={{ marginTop: 30, backgroundColor: '#283679', fontFamily: "Nunito", color: 'white', padding: 8, borderRadius: 3, paddingInline: 100 }}>Admin</h2>
                    <TextField label="Email" variant="outlined" margin="dense" style={{ marginTop: 15, width: '100%' }}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <TextField label="Password" variant="outlined" margin="dense" style={{ marginTop: 15, width: '100%' }}
                        type="password" value={pass} onChange={(e) => setPass(e.target.value)}
                    />
                    <br />
                    <Button variant="contained" onClick={login} style={{ backgroundColor: 'orange', marginTop: 25, fontSize: 16, fontFamily: "Nunito", paddingInline: 30 }}>Login</Button>
                </div>
            </div>
        </div>
    );


}

export default Login;
