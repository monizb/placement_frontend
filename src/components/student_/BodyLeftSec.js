import React, { useState } from "react";
import Card from "@mui/material/Card";
// import axios from "axios";
import axios from "../../configs/axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ApplyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  borderRadius: 10,
  textTransform: "Applied",
  width: 226,
  height: 67,
  "&:hover": {
    backgroundColor: green[700],
  },
  "&:focus": {
    // backgroundColor: "#808080",
  },
}));


const BodyLeftSec = () => {
  // var applytext="Apply Now";
  const [applytext, setApplytext] = useState("Apply Now");

  const apply = () => {
    axios.post(`/student/job/apply/${Id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }

      );
    setApplytext("Applied");
    document.getElementById("Applybutton").disabled = true;
    // var applytext="Applied";
  }
  const pathname = window.location.pathname;
  const Id = pathname.split('/')[4];
  console.log("job id", Id)
  return (
    <div
      className="body_left"
      style={{ width: "291px", padding: "23px", boxSizing: "border-box" }}
    >
      <Card
        sx={{
          maxWidth: 275,
          height: 137,
          borderRadius: 2,
          boxShadow: 0,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: "1rem",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <InstagramIcon style={{ width: '45', height: '45', color: 'pink' }} />

          <Button
            variant="outlined"
            style={{ marginRight: "15px", textTransform: "none" }}
            href="https://instagram.com/acharyainstitutes?utm_medium=copy_link"
          >
            Connect
          </Button>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <LinkedInIcon style={{ width: '45', height: '45', color: 'blue' }} />

          <Button
            variant="outlined"
            style={{ marginRight: "15px", textTransform: "none" }}
            href="https://www.linkedin.com/school/acharya-institutes"
          >
            Connect
          </Button>
        </Stack>
      </Card>
      <ApplyButton id="Applybutton" onClick={apply} variant="contained"  >{applytext}</ApplyButton>

    </div>
  );
};

export default BodyLeftSec;