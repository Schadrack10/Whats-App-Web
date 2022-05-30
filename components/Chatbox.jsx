import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Chatbox = ({title, func}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}></Box>
      <Box sx={styles.messageBox}></Box>
      <Box sx={styles.typeBar}></Box>
      <Box sx={styles.typeBar}>{title}</Box>
      <button onClick={func}></button>
    </Box>
  );
};

export default Chatbox;

const styles = {
  container: {
    height: "100%",
    width: "70%",
    background: 'url("bg2.png")',
    backgroundSize: "contain",
    color: "white",

    overflowY: "auto",
  },
  header: {
    height: "10%",
 background:'rgba(3, 13, 23, 0.5)',   
    // borderLft:'5px solid black'
  },
  typeBar: {
    height: "10%",
    background:'rgba(3, 13, 23,0.6)',
    padding:'10px'
  },
  messageBox: {
    height: "80%",
   
  },
};