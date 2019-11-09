import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniCard from './MiniCard';

import "../styles/details-card.scss"

class DetailsPage extends Component {

    render() {
        let comp = !!this.props.data.starship ? "starship" : "character";
        let name, height, mass, image, species, starships, homeworld = null;
        let cost, crew, hyperdriveRating, img, sname, maxAtmosphericSpeed, starshipClass = null;
        if (comp === "character") {
            ({ name, height, mass, image, species: { name: species }, starships: { edges: starships }, homeworld: { name: homeworld } } = !!this.props.data ? this.props.data : "");

        } else if (comp === "starship") {
            ({ cost, crew, hyperdriveRating, image: img, maxAtmosphericSpeed, name: sname, starshipClass } = !!this.props.data.starship ? this.props.data.starship : "");
        }
        return (
            <div className="m-container">
                <h1 className="name">{name || sname}</h1>
                <div className="container">
                    <div className="col-l">
                        <h3 >{name || sname}</h3>
                        <img src={image || img} alt="" />
                        {
                            (comp === "character") ?
                                <>
                                    <h5><span className="sp">Height: </span>{height}</h5>
                                    <h5><span className="sp">Weight:</span> {mass}</h5>
                                    <h5><span className="sp">Species:</span> {species}</h5>
                                    <h5><span className="sp">Home World:</span> {homeworld}</h5>
                                </>
                                :
                                <>
                                    <h5><span className="sp"> Class:</span> {starshipClass}</h5>
                                    <h5><span className="sp"> Cost:</span> {cost}</h5>
                                    <h5><span className="sp"> Crew:</span> {crew}</h5>
                                    <h5> <span className="sp"> Max Atmospheric speed:</span> {maxAtmosphericSpeed}</h5>
                                    <h5> <span className="sp">Hyperdrive Rating:</span>{hyperdriveRating}</h5>
                                </>
                        }

                    </div>
                    <div className="col-r">
                        <h2>Piloted Starships</h2>
                        {
                            (comp === "character") ?
                                starships.map(ship => (
                                    <Link to={`/starships/${ship.node.id}`} key={ship.node.id} className="link">
                                        <MiniCard ship={ship} />
                                    </Link>
                                ))
                                :
                                ""
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default DetailsPage;