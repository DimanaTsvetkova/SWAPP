import React from "react";
import gql from 'graphql-tag';
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import CharacterMiniCard from "../Characters/CharacterMiniCard";
import '../../styles/episode.scss'

const EPISODE_QUERY = gql`
    query EpisodeQuery($episodeId: ID!, $first: Int!, $after: String) {
      episode(id: $episodeId) {
        id
        title
        episodeId
        image
        director
        releaseDate
        openingCrawl
        people(first: $first, after: $after) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
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

function Episode() {
  let { episodeId } = useParams();
  let episodeNum = episodeId;
  episodeId = 'films.' + episodeId;
  const { data, loading, error, fetchMore } = useQuery(EPISODE_QUERY, {
    variables: { episodeId, first: 5 }
  })

  if (loading) return <span>loading</span>
  if (error) return <span>error</span>
  let { episode } = data
  let { edges } = data.episode.people;
  console.log(episode)

  return (
    <div className="episode-container">
      <div className="episode">
        <img src={episode.image} alt="" />
        <div>
          <h2>Star Wars: Episode: {episodeNum}</h2>
          <h3>{episode.title}</h3>
        </div>
      </div>

      <div className="description">
        <p>{episode.openingCrawl}</p>
        <br />
        <h4 className="det"> Director: <span>{episode.director}</span></h4>
        <h4 className="det"> Release Date: <span>{episode.releaseDate}</span> </h4>

      </div>
      <div className="characters">
        {
          edges.map(edge => (
            <Link to={`/characters/${edge.node.id}`} key={edge.node.id} className="character">
              <CharacterMiniCard person={edge.node} />
            </Link>
          ))
        }

      </div>
      <button className="load-more">Load more</button>

    </div>

  )
}

export default Episode;
