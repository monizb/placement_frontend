import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from 'react';
import { auth } from "./firebase.js";
import Dashboard from "./pages/Dashboard";
//     getAuth()
// .setCustomUserClaims(userRecord.uid, { roles: ["student"] })
const dd = auth;

function RequireAuth() {
  let auth = dd;

  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
