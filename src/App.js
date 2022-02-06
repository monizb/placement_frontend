import "./App.css";
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { auth } from "./firebase.js";
import Dashboard from "./pages/Dashboard";
//     getAuth()
// .setCustomUserClaims(userRecord.uid, { roles: ["student"] })
// const dd = auth;

function RequireAuth() {
  let user = auth.currentUser;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

function CurrrentUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<CurrrentUser />} >
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
