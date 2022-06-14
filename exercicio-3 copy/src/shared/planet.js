import React, { useEffect, useState } from "react";
import DescriptionWithLink from "./descriptioWithLink";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let date = await response.json();
  return date;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  });

  return (
    <div>
      <h3>{props.name}</h3>
      <DescriptionWithLink descripion={props.descripion} link={props.link} />
      <br />
      <img src={props.imagem}></img>
      <h4>Satellites</h4>
      <ul>
        {satellites.map((satellite) => (
          <li>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
