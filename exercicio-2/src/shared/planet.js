import React from 'react';
import DescriptionWithLink from './descriptioWithLink';


function Planet(props) {
  return (
    <div>
        <h3>{props.name}</h3>
        <DescriptionWithLink descripion={props.descripion} link={props.link}/>
        <br/>
        <img src={props.imagem}></img>
    </div>
  )
}

export default Planet;
