import React from 'react';
import Navigation from './navigation';
import './header.css';

const Header = function () {
    return (
   	  <div className = 'header'>
   	     <div className = 'titles'>
         	<h1>Lingulo HTML5</h1>
         	<p>A responsive website tutorial</p>
         </div>
         <Navigation />
   	     
   	  </div>
   )
}
export default Header;