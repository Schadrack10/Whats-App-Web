import React from 'react'
import { Children } from 'react'
import Chatbox from './Chatbox'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ContactBar from './ContactBar';

const Layout = ({Children}) => {
  return (
    <Box sx={styles.container}>
       <ContactBar/>
      {Children}
      <Chatbox/>
    </Box>
  )
}

export default Layout

const styles = {
     container :{
         display:'flex',
         height:'100vh',
         padding:'20px'
     }
}