import * as React from 'react';
var cars = ["Saab", "Volvo", "BMW"]
var text = "";
function getTitle(title) {
  return title;
}

function getCar() {
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + ", ";
  }
  return text;
}

function App() {
  return (
    <div>
      <h1>
        Hello {getTitle('React')}

      </h1>

      <h2>
        Would you like to drive the {getCar()} ?
      </h2>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;