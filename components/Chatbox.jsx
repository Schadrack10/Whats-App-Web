import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const Chatbox = () => {
  return (
    <Box sx={styles.container}>
           ChatBox
    </Box>
  )
}

export default Chatbox



const styles = {
  container:{
    height:'100%',
    width:'70%',
    background:'url("bg2.png")',
    backgroundSize:'contain',
    color:'white',
    padding:"20px",
    overflowY:'auto',
  }
}