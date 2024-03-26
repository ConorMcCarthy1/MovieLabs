import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
//import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
//import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
//import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'  


export default function CreditsCard({ credit }) {
  // const { favorites, addToFavorites } = useContext(MoviesContext);

  // if (favorites.find((id) => id === credit.id)) {
  //   credit.favorite = true;
  // } else {
  //   credit.favorite = false
  // }


  //  function AddToFavorites() {
     
  //   console.log("Wham-bam-I am-The Man"); 
  //   alert("They're your favourite");
  //  };
  return (
    <Card sx={{ maxWidth: 345 }}>
         <CardHeader
        avatar={
            <Avatar sx={{ backgroundColor: 'red' }}> 
              <FavoriteIcon/>
            </Avatar>
          
        }
        title={
          <Typography variant="h5" component="p">
            {credit.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          credit.profile_path
            ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
            : img
        }
      />
      <CardActions disableSpacing>
        <Link to={`/credits/${credit.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}