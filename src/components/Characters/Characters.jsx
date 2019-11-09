import React from "react";
import gql from 'graphql-tag';
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import MiniCard from "../../pages/MiniCard";

import "../../styles/partials/characters.scss";
 const CHARACTERS_QUERY = gql `
  query Characters($first: Int! = 12, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;

function Characters() {
    const { data, loading, error, fetchMore } = useQuery(CHARACTERS_QUERY)
    if (loading) return <span>loading</span>
    if (error) return <span>error</span>
    // let { allPeople } = data;
    let { edges, pageInfo } = data.allPeople;
    
    let {hasNextPage, endCursor} = pageInfo;
    const loadMore = () => {
        fetchMore({
            variables: {
                first: 12,
                after: endCursor
            },
            updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
                if (!hasNextPage) {
                    return prev;
                }

                return {
                    allPeople: {
                        ...allPeople,
                        edges: [...prev.allPeople.edges, ...allPeople.edges]
                    }
                };
            }
        });
    };
    return (
        <div className = "con">
        <div className="characters">

            {
                edges.map(edge => (
                    
                    <Link to={`/characters/${edge.node.id}`} key={edge.node.id} className="character">
                        <MiniCard person={edge.node} />
                    </Link>
                ))
            }
          
        </div>
        {
                hasNextPage ? <button className="load-more" onClick={loadMore}>Load more</button> : ""
            }
        </div>
    )
}

export default Characters;