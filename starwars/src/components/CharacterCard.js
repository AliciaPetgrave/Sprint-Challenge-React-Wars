import React from "react";
import styled from "styled-components";

const Card = styled.div`
    color:white;
    background: #889e81;
    font-family: 'Barlow', sans-serif;
    width:30%;
    margin:20px auto;
    border-radius:20px;
    padding:20px;
`;


function CharacterCard (props){

    return (
        <Card>
            <h2>
                {props.name}
            </h2>
            <p>Birth Year: {props.birth}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Skin Color: {props.skin}</p>
            <p>Number of Films: {props.films.length}</p>
            
        </Card>

    )
}

export default CharacterCard;