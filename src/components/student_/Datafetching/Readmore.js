import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Readmore(props) {

  let navigate = useNavigate();
  const readmore = (e) => {

    console.log("dd", props.Id);
    console.log("dd", props.Id);
    console.log("dd", props.Id);
    console.log("dd", props.Id);
    navigate(`/student/jobs/details/${props.Id}`);
    // history.push(
    //   {
    //     pathname:`./HomeSec/${props.Id}`
    //   }
    // )
    window.location.reload();
  }
  return (
    <>
      <Button onClick={readmore} style={{ color: "#FFF" }}>
        <div style={{ color: 'white', display: 'flex', alignItems: 'flex-end' }}>
          <Button color='inherit' className='button' style={{
            height: 38, width: 650,
            background: '#1E4786', marginLeft: 10, marginRight: 10
          }}>Read More</Button>
        </div>

      </Button>
    </>
  )
}