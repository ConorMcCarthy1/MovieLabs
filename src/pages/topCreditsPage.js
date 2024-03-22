import React from "react";
import { getTopCredits } from "../api/tmdb-api";
import CreditsListPageTemplate from  "../components/templateCreditsListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner'; 
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

const TopCreditsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('credits', getTopCredits)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }   

  console.log(data);
  const credits = data.results;

  // Redundant, but necessary to avoid app crashing.
 // const favorites = credits.filter(m => m.favorite)
 // localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <CreditsListPageTemplate
      title="Discover The Top People in Movies and TV Today"
      credit={credits}
      action={(credits) => {
        return <AddToFavoritesIcon credit={credits} />
      }}
    />
);
};
export default TopCreditsPage;