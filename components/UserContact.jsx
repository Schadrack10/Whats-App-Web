import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';




const UserContact = ({source , name , miniMessage , time , messageCount}) => {
    const [message , setMessage] = useState(true)
  return (
    <Box sx={styles.container}>
        <Avatar alt="Remy Sharp" src={source} sx={{ width: 56, height: 56 }} />
        <Box sx={styles.messageGrid}>
             <Typography variant="h1" color="#fff" sx={{fontWeight:'bold'}} fontSize="18px">{name}</Typography>
             <Typography variant="h1" color="#fff" sx={{fontWeight:'200',  textOverflow: 'ellipsis'}} fontSize="17px">{miniMessage}</Typography>
        </Box>
        <Box sx={styles.updateGrid}>
             <Typography variant="h1" color="#888" sx={{fontWeight:'300'}} fontSize="14px">{time}</Typography>
               { message ? <Box sx={styles.messageCount}>{messageCount}</Box>:'no message'}
        </Box>
    </Box>
  )
}

export default UserContact



const styles = {
   container:{
       borderBottom:'1px solid #041620',
       height:'100px',
       width:'100%',
       background:'rgba(3, 13, 23, 1)',
       display:'flex',
       alignItems:"center",
       padding:'10px',
       justifyContent:'space-between'
   },
   messageGrid:{
      // border:'1px solid red',
      width:'200px',
      height:"80%",
      display:'flex',
      alignItems:"start",
      justifyContent:'space-between',
      flexDirection:"column",
      padding:'5px 0',
      textOverflow: 'ellipsis'
   },
   updateGrid:{
   
      width:'100px',
      height:"80%",
      display:'flex',
      alignItems:"center",
      justifyContent:'space-between',
      flexDirection:"column",
      padding:'5px 0'
   },
   messageCount:{
      
      borderRadius:'100%',
      background:'white',
      width:'25px',
      height:'25px',
      display:'flex',
      alignItems:"center",
      justifyContent:'center',
      
   }
}