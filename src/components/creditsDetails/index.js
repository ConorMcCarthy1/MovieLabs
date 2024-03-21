import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography"; 



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
//const chip = { margin: 0.5 };

const CreditsDetails = ({ credit }) => {  // Don't miss this!
     //const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {credit.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
      
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`Born on ${credit.birthday}`} />
        <Chip icon={<MonetizationIcon />} label={`${credit.popularity} on our most wanted list`}/> 
        <Chip label={`From: ${credit.place_of_birth}`} />
        <Chip
          icon={<StarRate />}
          label={`${credit.known_for_department}`}
        />
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        
      </Fab>
     

      </>
  );
};
export default CreditsDetails ;