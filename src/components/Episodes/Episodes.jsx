import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import EpisodeCard from './EpisodeCard';

import "../../styles/episodes.scss"
const ALL_EPISODES = gql`
    {
        allEpisodes(first:7){
            totalCount
            edges{
                node{
                    episodeId
                    title
                    image
                    openingCrawl
                }
            }
        }
    }
`;

function Episodes(){
    const {data, loading, error} = useQuery(ALL_EPISODES);
    if (loading) return <span>loading</span>;
    if (error) return <p>Error on getting all episodes</p>;
    console.log(data)
    const {edges} = data.allEpisodes;
    return (
        <div className="main-container">
            {
                edges.map(( episode, i)=>(
                    <Link key={episode.node.episodeId} to={`/episodes/${i+1}`} style={{textDecoration: 'none'}}>
                    <EpisodeCard episode={episode.node} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Episodes;