import React from "react";
import Sidenav from "./Sidemav";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Aboutus() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
        <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>About Us</h1>
        
      </Box>
    </Box>
     
    </>
  );
}
