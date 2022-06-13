import React from 'react';
import Planet from './shared/planet';

function App() {
  return (
    <div>
      <Planet
        name="mercurio"
        descripion="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres"
        link="https://pt.wikipedia.org/wiki/Mercúrio_(planeta)"
        imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
      />
      <Planet
        name="terra"
        descripion="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul."
        link="https://pt.wikipedia.org/wiki/Terra#:~:text=A%20Terra%20é%20o%20terceiro,como%20Mundo%20ou%20Planeta%20Azul."
        imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/450px-The_Blue_Marble_%28remastered%29.jpg"
      />
    </div>
  );
}

export default App;
