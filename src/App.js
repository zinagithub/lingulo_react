import React from 'react';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Articles3 from './components/articles3';
import FourCol from './components/fourCol';
import TwoCol from './components/twocol';

function App() {
  return (
    <div className="App">
       <Header />
       <Slider />
       <Articles3 />
       <FourCol />
       <TwoCol />
    </div>
  );
}

export default App;
