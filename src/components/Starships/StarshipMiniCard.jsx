import React from "react";

function StarshipMiniCard(props) {
    console.log(props)
    let { id, name, image } = props.ship.node;
    return (
        <div className="mini-card">
            <img src={image} alt="" />
            <h2 className="s-name">{name}</h2>
        </div>
    )
}

export default StarshipMiniCard;