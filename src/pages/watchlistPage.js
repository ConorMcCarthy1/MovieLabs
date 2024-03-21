import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner' 
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";


const AnticipatedMoviesPage = () => {
  const {anticipated: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const anticipatedMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = anticipatedMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = anticipatedMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

 // const toDo = () => true;

  return (
    <PageTemplate
      title="Anticipated Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
           <RemoveFromPlaylistIcon movie={movies}/>
          </>
        );
      }}
    />
  );
    }
export default AnticipatedMoviesPage;