import React from "react";
//import Header from "../headerMovieList";
import  CreditsList   from "../creditsList";
import Grid from "@mui/material/Grid";

function CreditsListPageTemplate( props ) { 
          //const [nameFilter, setNameFilter] = useState("");

  //let displayedCredits = props.credits
//    // .filter((c) => {
//       return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
//     })
     

console.log(props.credits); 

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
     
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        </Grid>
        <CreditsList credit={props.credits}></CreditsList>
      </Grid>
    </Grid>
  );
}
export default CreditsListPageTemplate;