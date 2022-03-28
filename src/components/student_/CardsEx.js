import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import axios from "../../configs/axios";


function CardsEx() {
  const pathname = window.location.pathname;
  const jobId = pathname.split('/')[4];
  const [jobDetails, setJobdetail] = useState(null);


  useEffect(() => {
    async function fetchData() {
      console.log(jobId);
      await axios
        .get(`/student/job/${jobId}`)
        .then((res) => {
          console.log(res.data);
          setJobdetail(res.data.job);
          // console.log(res.data.job.eligibility.marks.X.minMarks)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [jobId]);

  if (!jobDetails) {
    return <div>Loadding...</div>;
  }
  return (
    <div className="body" style={{ padding: "23px" }}>
      <Card
        sx={{
          maxWidth: 800,
          height: 650,
          borderRadius: 2,
          boxShadow: 10,
          width: 1000,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: 10,
        }}
      >
        <Typography
          sx={{ fontSize: 30 }}
          color="text.secondary"
        // backgroundColor="gray"
        // width="126px"
        // height="15px"
        // radius="5px"
        // left="10px"
        // textAlign="center"
        // gutterBottom
        // marginTop={10}
        >
          Job Details
        </Typography>
        <Typography variant="h5">Company Name: {jobDetails.companyName}</Typography>
        <Typography variant="h5">Designation: {jobDetails.designation}</Typography>
        <Typography variant="h5">Description: {jobDetails.jobDesc}</Typography>
        <Typography variant="h5">Contact No.: {jobDetails.contactNo}</Typography>
        <Typography variant="h5">Email: {jobDetails.email}</Typography>
        <Typography variant="h5">No of Rounds: {jobDetails.noOfRounds}</Typography>
        <Typography variant="h5">Venue: {jobDetails.venue}</Typography>
        {/* <Typography variant="h5">Eligibility: Min marks in 10th {jobDetails.eligibility.marks.X.minMarks}, Min marks in 12th {jobDetails.eligibility.marks.XII.minMarks} </Typography> */}
        {/* <Typography variant="h5">Maximum Backlog: {jobDetails.eligibility.noOfBacks.maxBacks}</Typography> */}
      </Card>
    </div>
  );
};

export default CardsEx;