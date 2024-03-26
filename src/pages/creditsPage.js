import React from "react";
import { useParams } from 'react-router-dom'; 
import { useQuery } from "react-query";
import CreditsDetails from "../components/creditsDetails/";
import TemplateCreditsPage from "../components/creditsTemplatePage";
import { getCredits } from "../api/tmdb-api";


const CreditsPage = (props) => {
  const { id } = useParams(); 
  const { data: credit, isLoading, isError } = useQuery(
    ["credits", { id: id }],
    getCredits 
  ); 

  return (
    <>
      {isLoading ? ( 
        <p>Loading...</p>
      ) : isError ? ( 
        <p>Error occurred while fetching data</p>
      ) : (
        <>
          <TemplateCreditsPage credit={credit}>
            <CreditsDetails credit={credit} />
          </TemplateCreditsPage>
        </>
      )}
    </>
  );
};

export default CreditsPage;