import React from "react";
import { useParams } from 'react-router-dom'; 
import { useQuery } from "react-query";
import TemplateSeriesPage from "../components/seriesTemplatePage";
import { getSeries } from '../api/tmdb-api'
import Spinner from '../components/spinner'; 
import SeriesDetails from "../components/seriesDetails";

const individualSeriesPage = (props) => {
  const { id } = useParams();
  const { data: series , error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getSeries
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {series ? (
        <>
          <TemplateSeriesPage series={series}>
            <SeriesDetails series={series} />
          </TemplateSeriesPage>
        </>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default individualSeriesPage;