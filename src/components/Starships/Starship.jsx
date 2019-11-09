import React from "react";
import gql from 'graphql-tag';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import DetailsPage from "../../pages/DeatailsPage";
const STARSHIP_QUERY = gql`
  query starshipQuery($starshipId: ID!) {
    starship(id: $starshipId) {
        id
        name
        image
        cost
        starshipClass
        crew
        maxAtmosphericSpeed
        hyperdriveRating
      }
    }
`;

function Starship(){
    let {starshipId} = useParams();

    const { data, loading, error } = useQuery(STARSHIP_QUERY, {
        variables: { starshipId }
    })
    if (loading) return <span>loading</span>
    if (error) return <span>error</span>
   
    return(
        <DetailsPage data={data}/>
    )
}

export default Starship;