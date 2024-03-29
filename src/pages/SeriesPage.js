import React from "react";
import { getShows } from "../api/tmdb-api";
import SeriesListPageTemplate from "../components/templateSeriesListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner'; 
import AddCircleIcon from '@mui/icons-material/AddCircle';


const SeriesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tv', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const series = data.results;
console.log(series); 
 

  // Redundant, but necessary to avoid app crashing.
  //const favorites = series.filter(m => m.favorite)
 // localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 
  
  return (
    <SeriesListPageTemplate
      title="Discover TV Shows"
      series={series} 
      
      action={(series) => { 
       
        
      }}
    />
);
};
export default SeriesPage;