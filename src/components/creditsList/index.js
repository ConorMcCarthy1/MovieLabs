import React from "react";
import Credits from "../creditsCard";
import Grid from "@mui/material/Grid";

const CreditsList = ( {credits, action }) => {
  let creditsCards = credits.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Credits key={m.id} credits={m} action={action} />
    </Grid>
  ));
  return creditsCards;
};

export default CreditsList;