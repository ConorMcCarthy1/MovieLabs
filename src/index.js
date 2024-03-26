import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom"; 
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage"; 
import MovieReviewPage from "./pages/movieReviewPage";  
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader'; 
import MoviesContextProvider from "./contexts/moviesContext"; 
import AddMovieReviewPage from './pages/addMovieReviewPage'; 
import AnticipatedMoviesPage from "./pages/watchlistPage"; 
import SeriesPage from "./pages/SeriesPage";
import TopRatedPage from "./pages/topRatedPage";
import TopCreditsPage from "./pages/topCreditsPage"; 
import IndividualSeriesPage from "./pages/individualSeriesPage"; 
import CreditsPage from "./pages/creditsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>    
          <Route path="/tv/:id" element={<IndividualSeriesPage/>}  />
          <Route path="/credits/:id" element={<CreditsPage/>}  />
          <Route path="/credits" element={ <TopCreditsPage/>} />
        <Route path="/tv" element={ <SeriesPage/>} /> 
        <Route path="/movies/toprated" element={ <TopRatedPage/>}  />
          <Route path="/movies/anticipated" element={ <AnticipatedMoviesPage/>} />
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
           <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);