import React from 'react';
import StarshipMiniCard from '../Starships/StarshipMiniCard';
import { Link } from "react-router-dom";
import "../../styles/character.scss";


function CharacterCard(props){
    
    let {name, height, mass, image} = props.charData;
    let species = props.charData.species.name;
    let starships = props.charData.starships.edges;
    let homeworld = props.charData.homeworld.name;
    console.log(props)
    return(
        <div className="character-container">
        <h1 className="name">{name}</h1>
        <div className="container">
            <div className="col-l">
                <h3 >{name}</h3>
                <img src={image} alt=""/>
                <h5><span className="sp">Height: </span>{height}</h5>
                <h5><span className="sp">Weight:</span> {mass}</h5>
                <h5><span className="sp">Species:</span> {species}</h5>
                <h5><span className="sp">Home World:</span> {homeworld}</h5>
            </div>
            <div className="col-r">
                <h2>Piloted Starships</h2>
                {
                    starships.map(ship=>(
                        <Link to = {`/starships/${ship.node.id}`} key={ship.node.id} className="starship-mini-card">
                        <StarshipMiniCard ship={ship} />
                        </Link>
                    ))
                }
            </div>
            </div>
        </div>
       
    )
}
export default CharacterCard;