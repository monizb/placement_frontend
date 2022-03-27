import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginAs from "./pages/LoginAs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { auth } from "./firebase.js";
// import { getAuth } from "firebase"
import AdminRoutes from "./routes/adminRoutes";
import FacultyRoutes from "./routes/facultyRoutes";
import StudentRoutes from "./routes/studentRoutes";
import TpoRoutes from "./routes/tpoRoutes";
import { onAuthStateChanged } from "firebase/auth";
import axios from './configs/axios';




// firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   // Send token to your backend via HTTPS
//   // ...
// }).catch(function(error) {
//   // Handle error
// });



// const aut = getAuth()
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // console.log("aut.currentUser =>", user);
    await user.getIdToken(true).then(idToken => {
      console.log("idToken =>", idToken);
      axios.interceptors.request.use(
        config => {
          config.headers['Authorization'] = 'Bearer ' + idToken;
          return config;
        },
        error => {
          return Promise.reject(error);
        }
      );
      // axios.defaults.headers.common["Authorization"] = "Bearer " + idToken;
    });
  }
});



function RequireAuth() {

  const navigate = useNavigate();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("aut.currentUser =>", user);
      await user.getIdToken().then(idToken => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + idToken;
      });
    }
    if (user) {
      const role = await user.getIdTokenResult().then(idTokenResult => idTokenResult.claims.roles[0]);
      if (role === "student") {
        // console.log("student role auth");
        return navigate("/student/dashboard");
      }
      if (role === "faculty") {
        return navigate("/faculty/dashboard");
      }
      if (role === "admin") {
        return navigate("/admin/dashboard");
      }
      if (role === "tpo") {
        return navigate("/tpo/dashboard");
      }
    }
  });
  return <Outlet />;
}

// function CurrrentUser() {
// const user = auth.currentUser;
// console.log(user);
// if (user) {
//   user.getIdTokenResult().then(idTokenResult => { console.log(idTokenResult.claims.roles[0]) });
//   return <Navigate to="/student/dashboard" />;
// }
//   return <Outlet />;
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route element={<RequireAuth />} >
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
    </div>
  );
}

export default App;
