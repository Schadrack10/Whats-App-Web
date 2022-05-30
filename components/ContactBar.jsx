import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserContact from "./UserContact";

const ContactBar = () => {
  return (
    <>
      {/* <Box sx={styles.header}>
       </Box> */}
      <Box sx={styles.container}>
        <Box sx={styles.header}></Box>

        <Box sx={styles.chatcardContainer}>
          <UserContact
            name="Katlego"
            miniMessage="lets meet please"
            source="av7.jpg"
            time={"14:45"}
            messageCount={4}
          />
          <UserContact
            name="Nico"
            miniMessage="we need a new song "
            source="av2.jpeg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="William"
            miniMessage="hi, how are you today"
            source="av3.jpeg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Dercio"
            miniMessage="you will finish work today?"
            source="av4.jpeg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Gomolemo"
            miniMessage="i want a new gift !"
            source="av5.jpeg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Bae"
            miniMessage="Miss you alot"
            source="av6.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Schadrack"
            miniMessage="the irony is juss too much"
            source="shade-covid.jpg"
            time={"14:45"}
            messageCount={2}
          />
          <UserContact
            name="Mr Tony"
            miniMessage="Im pleased"
            source="av4.jpeg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
          <UserContact
            name="Henry"
            miniMessage="hi, how are you today"
            source="av1.jpg"
            time={"14:45"}
            messageCount={1}
          />
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
    background:'rgba(3, 13, 23, 0.5)',
  },
};