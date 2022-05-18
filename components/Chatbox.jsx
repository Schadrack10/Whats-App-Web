import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Chatbox = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}></Box>
      <Box sx={styles.messageBox}></Box>
      <Box sx={styles.typeBar}></Box>
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
 background:'rgba(3, 13, 23, 1)',
    // borderLeft:'5px solid black'
  },
  typeBar: {
    height: "10%",
    background:'rgba(3, 13, 23,1)',
  },
  messageBox: {
    height: "80%",
   
  },
};
