import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Background.css";
function Landing() {
  return (
    <div>
      <div>
        <Navbar name='Sign In' />
      </div>
      <div className='background'>
        <h1>Welcome to the Landing Page</h1>
      </div>
    </div>
  );
}

export default Landing;
