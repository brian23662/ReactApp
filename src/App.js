import * as React from 'react';

function App() {
  // you can do something in between
  const title = 'React';

  return (
    <div>
      <h1>Hello {title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;