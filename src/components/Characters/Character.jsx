import React from 'react';
import gql from 'graphql-tag';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import DetailsPage from '../../pages/DeatailsPage';
export const CHARACTER_QUERY = gql `
  query Character ($characterId: ID!)  {
      person(id: $characterId) {
        id
        name
        image
        height
        mass
        species {
          name
        }
        homeworld {
          name
        }
        starships(first: 20) {
          edges {
            node {
                id
                name
                image
            }
          }
        }
      }
    }
`;

function Character(){
    let {characterId} = useParams();
    
    
    const { data, loading, error } = useQuery(CHARACTER_QUERY, {
        variables: { characterId}
    })  
    if(loading) return <span>loading</span>
    if (error) return <span>error</span>
        return(
            <DetailsPage  data={data.person}  key={data.person.id}/>
        )
}  

export default Character;