import React, { Fragment, useEffect, useState } from "react";
import Planet from "./planet";
import Form from "./from";
import './style.css'

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }

  return (
    <div className="Planets">
      <h1>Lista de planetas</h1>
      <hr/>
      <Form addPlanet={addPlanet}/>
      <hr/>
      {planets.map((planet) => (
        <Planet
          id={planet.id}
          name={planet.name}
          description={planet.description}
          link={planet.link}
          imagem={planet.imagem}
        />
      ))}
    </div>
  );
};

export default Planets;