import React from 'react';
import "../styles/partials/minicard.scss";
import anonymous from "../assets/images/Anonymous-1.jpg"
function CharacterMiniCard(props){
let {image, name} = props.person || props.ship.node;

return(
    <div className="mini-card">
    {
        !!image? 
        <img className="m-img" src={image} alt=""/>
        :
        <img className="m-img" src={anonymous} alt=""/>
    }
        <h2 className="m-name">{name}</h2>
    </div>
)
}
export default CharacterMiniCard;