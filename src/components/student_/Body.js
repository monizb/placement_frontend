import React from "react";
import { Card, Typography } from "@mui/material";



class Cards extends React.Component {
  render() {
    return (

      <div style={{ padding: '10px' }}>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Card
            style={{
              width: 800,
              height: 180,
              alignContent: "center",
              paddingLeft: "40px",
              paddingTop: "10px",
              marginTop: "40px",
            }}
          >
            <Typography>{this.props.children}</Typography>
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
              }}
            >

            </div>
          </Card>
        </div>

        <br></br>
      </div>
    );
  }
}

export default Cards;