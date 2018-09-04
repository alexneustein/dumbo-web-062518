import React from 'react';
import './App.css';
import Navbar from './Navbar'
import paintings from './paintings.js'
import PaintingContainer from './PaintingContainer'
import PaintingCard from './PaintingCard'
import About from './About'
import Main from './Main'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/paintings' render={(props) => <PaintingContainer paintings={paintings} {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;

