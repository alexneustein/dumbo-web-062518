import React from 'react';
import './App.css';
import Navbar from './Navbar'
import paintings from './paintings.js'
import PaintingContainer from './PaintingContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PaintingContainer paintings={paintings} />
      </div>
    );
  }
}

export default App;

// App
// - PaintingsContainer
// - painting1
// -painting2

