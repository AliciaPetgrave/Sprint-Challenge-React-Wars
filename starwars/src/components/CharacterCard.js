import React from "react";
import styled from "styled-components";


function CharacterCard (props){

    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <p>Birth Year: {props.birth}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Skin Color: {props.skin}</p>
            <p>Number of Films: {props.films.length}</p>
        </div>

    )
}

export default CharacterCard;