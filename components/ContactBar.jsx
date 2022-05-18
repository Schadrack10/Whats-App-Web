import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ContactBar = () => {
  return (
    <>
      {/* <Box sx={styles.header}>

       </Box> */}
      <Box sx={styles.container}>
        <Box sx={styles.header}></Box>
        <Box sx={styles.chatcardContainer}>
          <Box sx={{ height: "3000px" }}></Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactBar;

const styles = {
  container: {
    height: "100%",
    width: "30%",
    background: "#041620",
  },
  chatcardContainer: {
    height: "90%",
    overflowY: "scroll",
    width: "100%",
    background: "#041620",
  },
  header: {
    height: "10%",
    background:'rgb(3, 33, 52)'

  },
};
