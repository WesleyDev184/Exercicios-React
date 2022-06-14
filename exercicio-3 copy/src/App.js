import React, { Fragment, useEffect, useState } from "react";
import Planet from "./shared/planet";
import "./App.css";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const App = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  return (
    <div className="app-body">
      <h1>Lista de planetas</h1>
      <hr />
      {planets.map((planet) => (
        <Planet
          id={planet.id}
          name={planet.name}
          descripion={planet.description}
          link={planet.link}
          imagem={planet.imagem}
        />
      ))}
    </div>
  );
};

export default App;
