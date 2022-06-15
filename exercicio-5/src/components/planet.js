import React, { useEffect, useState } from "react";
import FormSatellite from "./form_Satellites";
import DescriptionWithLink from "./shared/descriptioWithLink"

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
  },[]);

  const addSatellite = (new_Satellite) => {
    setSatellites([...satellites, new_Satellite])
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <DescriptionWithLink descripion={props.descripion} link={props.link} />
      <br />
      <img src={props.imagem}></img>
      <hr/>
      <FormSatellite addSatellite={addSatellite}/>
      <hr/>
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
