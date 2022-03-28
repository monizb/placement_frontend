import "./App.css";
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginAs from "./pages/LoginAs";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { auth } from "./firebase.js";
// import { getAuth } from "firebase"
import AdminRoutes from "./routes/adminRoutes";
import FacultyRoutes from "./routes/facultyRoutes";
import StudentRoutes from "./routes/studentRoutes";
import TpoRoutes from "./routes/tpoRoutes";
// import { onAuthStateChanged } from "firebase/auth";
// import axios from './configs/axios';
//import { AuthProvider, AuthContext } from "./AuthProvider";
import { useEffect, useContext } from "react";
import axios from "./configs/axios";
import { firebaseAuth } from "./firebase";
import Store from "./Store";
//import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";


// firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   // Send token to your backend via HTTPS
//   // ...
// }).catch(function(error) {
//   // Handle error
// });



// const aut = getAuth()

// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     // console.log("aut.currentUser =>", user);
//     await user.getIdToken(true).then(idToken => {
//       // console.log("idToken =>", idToken);
//       axios.interceptors.request.use(
//         config => {
//           config.headers['Authorization'] = 'Bearer ' + idToken;
//           return config;
//         },
//         error => {
//           return Promise.reject(error);
//         }
//       );
//       // axios.defaults.headers.common["Authorization"] = "Bearer " + idToken;
//     });
//   }
// });

axios.interceptors.request.use(
  async config => {
    console.log("request interceptor in work");
    if (firebaseAuth.currentUser) {
      const token = await firebaseAuth.currentUser.getIdToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);


function App() {
  const [open, setOpen] = React.useState(false);
  const [authentication, setAuthState] = useState({
    authenticated: false,
    initialized: true,
    type: null
  });
  React.useEffect(() => firebaseAuth.onAuthStateChanged(async function (user) {

    if (user) { //the user has been logged in
      let token_result = await firebaseAuth.currentUser.getIdTokenResult();
      setAuthState({
        authenticated: true, //the user is now authenticated
        initialized: true,
        type: token_result.claims.account
      });
    } else { //the user has been logged out
      setAuthState({
        authenticated: false, //the user is no longer authenticated
        initialized: false
      });
    }

    console.log(authentication);
  }), [setAuthState]);
  return (
    <div className="App">
      <Store>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route >
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<LoginAs />} />
              <Route exact path="/login/student" element={<Login name="Student" />} />
              <Route exact path="/login/faculty" element={<Login name="Faculty" />} />
              <Route exact path="/login/admin" element={<Login name="Admin" />} />
              <Route exact path="/login/tpo" element={<Login name="TPO" />} />
            </Route>
            {/* <Route exact path="/student" > */}
            {StudentRoutes()}
            {/* </Route> */}
            {/* <Route path="/faculty" > */}
            {FacultyRoutes()}
            {/* </Route> */}
            {/* <Route path="/admin" > */}
            {AdminRoutes()}
            {/* </Route> */}
            {/* <Route path="/tpo" > */}
            {TpoRoutes()}
            {/* </Route> */}
          </Routes>
        </Router>
      </Store>
    </div>
  );
}

export default App;
