import React, { Fragment, useEffect, useState } from "react";
import Planets from "./components/planets";
import Rotas from './routes'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Rotas/>
    </div>
  );
};

export default App;