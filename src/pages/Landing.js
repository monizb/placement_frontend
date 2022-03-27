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
        {/* <h1>Welcome to the Landing Page</h1> */}


        <h2 className="about">
          Ranking among the Top colleges in Bangalore, India Acharya Institutes
          was established in 1990. A cerebral destination for national and
          international students, we offer prestigious learning experience and a
          lavishing 120 acres of campus that attracts students from around the
          world. There is nothing like the lush greenery and mesmerizing views
          to soothe your soul! Acharya Institutes is exactly what you have
          wished for. Come, discover Acharya Institutes - Where the world comes
          to Learn!
        </h2>


      </div>
    </div>
  );
}

export default Landing;
