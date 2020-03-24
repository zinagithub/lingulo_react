import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
   return (
      <nav>
             <ul>
                <Link to = "/Home"><li>Home</li></Link>
                <Link to = "/"><li>Portfolio</li></Link>
                <Link to = "/About"><li>About</li></Link>
                <Link to = "/"><li>Contact</li></Link>
             </ul>
      </nav> 
    );
}
/*class Navigation extends React.Component {
	render() {
		return (
			<nav>
   	         <ul>
   	            <li>Home</li>
   	            <li>Portfolio</li>
   	            <li>About</li>
                <li>Contact</li>
   	         </ul>
   	  </nav> 
			);
	}
}*/
export default Navigation;