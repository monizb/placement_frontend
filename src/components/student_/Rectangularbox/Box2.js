import React from "react";
import styled from "styled-components";
import "../Rectangularbox/Box2.css";

export const Box = styled.div`
  height: 220px;
  width: 100%;
  background: #f5e9dd;
  bottom: 0;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content:center @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Heading = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

export const Typography = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>ADDRESS</Heading>

            <Typography className="text">
              Acharya Dr. Sarvepalli Radhakrishnan Road Acharya PO,
              Soldevanahalli Bangalore-560 107, India
            </Typography>
          </Column>
          <Column>
            <Heading>DOMESTIC</Heading>

            <Typography className="text">
              {" "}
              admissions@acharya.ac.in +917406644449 +18147054141
            </Typography>
          </Column>
          <Column>
            <Heading>INTERNATIONAL</Heading>

            <Typography className="text">
              {" "}
              international@acharya.ac.in +919731779233 +18147054141
            </Typography>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;