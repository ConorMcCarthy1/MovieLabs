import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton"; 
import MicrowaveIcon from '@mui/icons-material/Microwave';
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'  


export default function SeriesCard({ series, action }) {
  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
         <CardHeader
        // avatar={
        //   series.favorite ? (
        //     <Avatar sx={{ backgroundColor: 'red' }}>
             
        //     </Avatar>
        //   ) : null
        // }
        title={
          <Typography variant="h5" component="p">
            {series.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          series.poster_path
            ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container> 
        <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <MicrowaveIcon fontSize="small" />
              {series.popularity}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {series.first_air_date_year}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {series.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(series)}
        <Link to={`/tv/${series.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}