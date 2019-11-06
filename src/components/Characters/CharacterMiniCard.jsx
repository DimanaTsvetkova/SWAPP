import React from 'react';

function CharacterMiniCard(props){
let {person} = props;
console.log(props)

return(
    <div className="mini-card">
        <img src={person.image} alt=""/>
        <h2 className="name">{person.name}</h2>
    </div>
)
}
export default CharacterMiniCard;