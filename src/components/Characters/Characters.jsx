import React from "react";
import gql from 'graphql-tag';
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import CharacterMiniCard from "./CharacterMiniCard";
const CHARACTERS_QUERY = gql`
{
    allPeople(first: 12){
        edges{
          node{
            id
            image
            name
          }
        }
      }
  }
`;

function Characters(){
    const { data, loading, error, fetchMore } = useQuery(CHARACTERS_QUERY)
    if (loading) return <span>loading</span>
    if (error) return <span>error</span>
    console.log(data)
    let {edges} = data.allPeople;
    return(
      <div className="characters">

        {
            edges.map(edge=>(
                <Link to={`/characters/${edge.node.id}`} key={edge.node.id} className="character">
                <CharacterMiniCard person={edge.node} />
              </Link>
            ))
        }
      </div>
        
        )
}

export default Characters;