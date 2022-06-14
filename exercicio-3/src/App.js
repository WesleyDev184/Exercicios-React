import React, { Fragment } from "react";
import Planet from "./shared/planet";
import "./App.css";

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    planets: [],
  };

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }));
    });
  }

  render() {
    return (
      <div className="app-body">
        <h1>Lista de planetas</h1>
        <hr />
        {this.state.planets.map((planet) => (
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
  }
}

export default App;
