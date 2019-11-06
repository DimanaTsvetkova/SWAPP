import React from "react";
import gql from 'graphql-tag';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

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

    const { data, loading, error, fetchMore } = useQuery(STARSHIP_QUERY, {
        variables: { starshipId }
    })
    if (loading) return <span>loading</span>
    if (error) return <span>error</span>
    console.log(data)

    let {cost, crew,hyperdriveRating , image,maxAtmosphericSpeed, name, starshipClass}  = data.starship;


    return(
            <>
        <h1>{name}</h1>
        <br/>
        <h2>{starshipClass}</h2>
        <div>
            <div>
                <h3>{name}</h3>
                <img src={image} alt=""/>
                <h5>Class: {starshipClass}</h5>
                <h5>Cost: {cost}</h5>
                <h5>Crew: {crew}</h5>
                <h5>Max Atmospheric speed: {maxAtmosphericSpeed}</h5>
                <h5>Hyperdrive Rating: {hyperdriveRating}</h5>

            </div>
            <div>
                <h2>Compared to Starship Class Max</h2>
                <img src={image} alt=""/>
            
            </div>
        </div>  

        </>
    )
}

export default Starship;