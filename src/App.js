import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import React, { useEffect, useState } from 'react';
import { auth } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//     getAuth()
// .setCustomUserClaims(userRecord.uid, { roles: ["student"] })


function RequireAuth() {
  let auth = getAuth();

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
          <Route exact path="/login" element={<Login />} />
          <Route
            element={<RequireAuth />}
          >
            <Route path="/dashboard" element={<Landing />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
