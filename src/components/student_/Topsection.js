import React from "react";
import styled from "styled-components";
import Landingimg from "../../assets/landingimg.jpg";
import Acharyalogo from "../../assets/acharyalogo.png";

const Topsectionconatiner = styled.div`
  width: 100%;
  height: 500px;
  background: url(${Landingimg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Backgroundimgfilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.58);
  display: flex;
  flex-direction: column;
`;

const Topsectioninnercontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: bottom-left;
  margin-top: 100px;
  flex-direction: column;
`;

const acharyalogo = styled.div`
  width: 179px;
  height: 151px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 34px;
  color: black;
  line-height: 1.7;
  font-weight: 700;
`;

const Subtitle = styled.div`
  margin: 0;
  line-height: 27px;
  color: black;
  font-weight: 500;
  font-size: 18px;
`;

export function Topsection(props) {
  return (
    <Topsectionconatiner>
      <Backgroundimgfilter>
        <Topsectioninnercontainer>
          <img src={Acharyalogo} alt="logo" />

          <Title>ACHARYA INSTITUTES</Title>
          <Subtitle>"WHERE THE WORLD COMES TO LEARN"</Subtitle>
        </Topsectioninnercontainer>
      </Backgroundimgfilter>
    </Topsectionconatiner>
  );
}

export default Topsection;