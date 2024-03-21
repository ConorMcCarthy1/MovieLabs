import React, {useState, useEffect}  from "react";
import { useParams } from 'react-router-dom';
import CreditsDetails from "../components/creditsDetails/";
import TemplateCreditsPage from "../components/creditsTemplatePage";
import { getCredits } from "../api/tmdb-api";

const CreditsPage = (props) => {
  const { id } = useParams();
  const [credit, setCredit] = useState(null);

  useEffect(() => {
    getCredits(id).then((credit) => {
      setCredit(credit);
    });
  }, [id]);

  return (
    <>
      {credit ? (
        <>
          <TemplateCreditsPage credit={credit}>
            <CreditsDetails credit={credit} />
          </TemplateCreditsPage>
        </>
      ) : (
        <p>Waiting for credits details</p>
      )}
    </>
  );
};

export default CreditsPage;