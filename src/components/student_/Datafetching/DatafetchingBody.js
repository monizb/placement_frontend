import Body from "../Body";
import axios from '../../../configs/axios';
import React, { useState, useEffect } from "react";
import Readmore from "./Readmore";
import Typography from "@mui/material/Typography";
import '../../../styles/Background.css'

function DatafetchingBody() {
  const [job, setJob] = useState(null);
  console.log("dd");
  console.log("aa");
  console.log("aa");



  useEffect(() => {
    async function fetchData() {
      //   return axios({
      //     method: 'get',
      //     url: url,
      //     headers: { 'Authorization': 'Bearer ' + accessToken }
      // })
      // You can await here
      await axios
        .get("/student/jobs/list?pageSize=3&pageNo=1")
        .then((res) => {
          setJob(res.data.jobs);
        })
        .catch((err) => {
          console.log(err);
        });
      // ...
    }
    fetchData();

  }, []);
  if (!job) {
    return <div className='background'>Loadding...</div>;
  }
  return (
    <div className='background'>

      {job.map((job) => (
        <Body key={job.postId}>
          {/* <h2></h2> */}
          <Typography variant="h5">Company Name :{job.companyName}</Typography>
          <li>job id :{job.postId}</li>
          <li>Destignation : {job.designation}</li>
          <li>Contact Number : {job.contactNo}</li>
          <li>Email : {job.email}</li>
          <Readmore Id={job.postId} />
        </Body>
      ))}
    </div>

  );
}
export default DatafetchingBody;