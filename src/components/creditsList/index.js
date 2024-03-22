import React from "react";
import Credits from "../creditsCard";
import Grid from "@mui/material/Grid";

const CreditsList = ( {credit }) => {
  let creditsCards = credit.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Credits key={m.id} credit={m}/>
    </Grid>
  ));
  return creditsCards;
};

export default CreditsList;