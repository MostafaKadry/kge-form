import React from 'react'
import PersonnelDetails from './PersonnelDetails';
import "./css/home.css";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
const Home = () => {
  return (
      <Stack className="Home-container">
        <Paper elevation={12}>
        <PersonnelDetails />
         </Paper>
    </Stack>
  )
}

export default Home;