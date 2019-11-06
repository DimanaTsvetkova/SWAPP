import React from 'react';
import '../../styles/episode-card.scss';

function EpisodeCard (props){
    let {episode} = props;
    let {title, image,openingCrawl } = episode;
    openingCrawl = openingCrawl.slice(0, 150) + "...";
    return(
        <div className="episode-card">
            <img src={image} alt=""/>

            <h3 className="episode-title">{title}</h3>
            <p className="crawl">
               {openingCrawl}
            </p>
        </div>
    )
}

export default EpisodeCard