import React from "react";
import styled from "styled-components";


function CharacterCard (props){

    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <p>{props.birth}</p>
            <p>{props.gender}</p>
        </div>

    )
}

export default CharacterCard;