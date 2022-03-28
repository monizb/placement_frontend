import React from 'react';

import '../../styles/Background.css'
import { Card, Button, Typography, Stack, Avatar, styled } from '@mui/material/';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { orange, blue } from '@mui/material/colors';


const ProfileButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  borderRadius: 10,
  textTransform: 'none',
  width: 210,
  color: 'white',
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

const AluminiButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[900]),
  backgroundColor: blue[900],
  borderRadius: 10,
  textTransform: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: blue[700],
  },
}));





const BodyLeft = () => {
  return (
    <div className='background'>
      <div className="body_left" style={{ width: "291px", padding: "23px", boxSizing: 'border-box' }}>

        <Card sx={{ maxWidth: 275, height: 137, borderRadius: 2, boxShadow: 0, padding: 2, display: 'flex', flexDirection: "column", justifyContent: 'space-evenly', boxSizing: 'border-box', marginBottom: '1rem' }}>

          <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <InstagramIcon style={{ width: '45', height: '45', color: 'pink' }} />
            {/* <CardMedia
        component="img"
        style={{width: "35px",marginLeft: "10px"}}
        // image="../../images/instagram.png"
        image="../../images/linkedin.png"
        alt="instagram"
      /> */}
            <Button variant="outlined" style={{ marginRight: "15px", textTransform: 'none', }} href="https://instagram.com/acharyainstitutes?utm_medium=copy_link">Connect</Button>
          </Stack>

          <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
          >

            <LinkedInIcon style={{ width: '45', height: '45', color: 'blue' }} />
            {/* <CardMedia
        component="img"
        style={{width: "35px",marginLeft: "10px"}}
        image="../../images/linkedin.png"
        alt="linkedin"
      /> */}
            <Button variant="outlined" style={{ marginRight: "15px", textTransform: 'none', }} href="https://www.linkedin.com/school/acharya-institutes">Connect</Button>

          </Stack>

        </Card>

        <Card sx={{ maxWidth: 275, height: 244, borderRadius: 2, boxShadow: 0, padding: 2, display: 'flex', flexDirection: "column", justifyContent: 'space-evenly', boxSizing: 'border-box', alignItems: 'center' }}>

          <Avatar
            alt="Marigowda C K"
            src="../../images/MarigowdaCK.jpeg"
            sx={{ width: 56, height: 56 }}
          />
          <Typography mb={0} variant="h6" gutterBottom component="div" fontSize="0.8vw" fontWeight="550" >
            Prof. Marigowda C K
          </Typography>
          <Typography mt={-1.5} variant="subtitle1" gutterBottom component="div" fontSize="0.7vw" >
            Vice-principal
          </Typography>

          <ProfileButton variant="contained">+91 9901065561</ProfileButton>
          <ProfileButton variant="contained">marigowda@acharya.ac.in</ProfileButton>

        </Card>
        <Card sx={{ maxWidth: 275, height: 91, borderRadius: 2, boxShadow: 0, padding: 2, display: 'flex', flexDirection: "column", justifyContent: 'space-evenly', boxSizing: 'border-box', marginTop: '1rem', textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom component="div" fontSize="0.8vw" fontWeight="550">
            Prof. Ann Mary
          </Typography>
          <AluminiButton variant="contained">Submit details</AluminiButton>
        </Card>
      </div>
    </div>
  )
}


export default BodyLeft;