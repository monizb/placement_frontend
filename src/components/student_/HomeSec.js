import React from "react";
import BodyRight from "./BodyRight";
import CardDetails from "./CardDetails";
import BodyLeftSec from "./BodyLeftSec";
import { KeyboardArrowLeft } from "@mui/icons-material";

function HomeSec() {
  return (

    <div style={{ marginTop: "0px" }}>
      <div
        style={{ width: "100wv", height: "50px", background: "rgb(30,71,134)" }}
      >
        <a
          style={{
            border: "none",
            background: "rgb(30,71,134)",
            color: "white",
            fontSize: "24px",
          }}
          href="../../Dashboard"
        >
          <KeyboardArrowLeft style={{ marginTop: "4px", paddingTop: "10px" }} />
          Back
        </a>
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          backgroundColor: "rgb(196, 196, 196)",
        }}
      >

        <BodyLeftSec />
        <CardDetails />
        <BodyRight />
      </div>
    </div>
  );
};

export default HomeSec;