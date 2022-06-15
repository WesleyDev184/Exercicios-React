import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import NotFoundScreen from './screens/noFound';
import PlanetScreen from './screens/planet';
 
const Rotas = () =>(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PlanetsScreen />} />
        <Route path='/planet/:id' element={<PlanetScreen />} />
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
    </BrowserRouter>
  );
;
 
export default Rotas;