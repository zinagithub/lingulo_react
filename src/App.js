import React from 'react';
import './App.css';
/*import Header from './components/header';
import Slider from './components/slider';
import Articles3 from './components/articles3';
import FourCol from './components/fourCol';
import TwoCol from './components/twocol';
import Footer from './components/footer';*/
import About from './components/about';
import Home from './components/home'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          
          <Switch>
          <Route path = "/about" component = {About} />
          <Route path = "/"  component = {Home} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
