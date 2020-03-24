import React from 'react';
import Navigation from './navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import './header.css';

const Header = function () {
    return (
   	  <div className = 'header'>
   	     <div className = 'titles'>
         	<h1>Lingulo HTML5</h1>
         	<p>A responsive website tutorial</p>
         </div>
         <BrowserRouter>
            <Navigation />
         </BrowserRouter>
   	     
   	  </div>
   )
}
export default Header;