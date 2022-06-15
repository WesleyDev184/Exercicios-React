import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import FormSatellite from "./form_Satellites";
import DescriptionWithLink from "./shared/descriptioWithLink"

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let date = await response.json();
  return date;
}

const PlanetInfo = () => {
  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState({})
  const [redirect, setRedirect] = useState(false)

  let {id} = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getPlanet(id).then((data) => {
      setSatellites(data["satellites"]);
      setPlanet(data['data'])
    }, error =>{
      setRedirect(true);
    });
  },[]);

  const goToHome = () =>{
     return navigate('/');
  }

  const addSatellite = (new_Satellite) => {
    setSatellites([...satellites, new_Satellite])
  }

  if(redirect){
    navigate('/')
  }

  return (
    <div>
      <h3>{planet.name}</h3>
      <DescriptionWithLink description={planet.description} link={planet.link} />
      <br />
      <img src={planet.imagem}></img>
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
      <button type="button" onClick={goToHome}>Voltar</button>
    </div>
  );
};

export default PlanetInfo;
