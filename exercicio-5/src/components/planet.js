import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import DescriptionWithLink from "./shared/descriptioWithLink"

const Planet = (props) => {

  return (
    <div>
      <Link to={`/planet/${props.id}`}><h3>{props.name}</h3></Link>
      <DescriptionWithLink description={props.description} link={props.link} />
      <br />
      <img src={props.imagem}></img>
      <hr/>
    </div>
  );
};

export default Planet;
