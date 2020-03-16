import React from 'react';
import './articles3.css';

class Articles3 extends React.Component {
   render(){
   	    return(
   	    	<section id="boxcontent">
				
				<article>
					<img src="img/icon1.png" alt="alt text"/>
					<h3>Lorem ipsum</h3>
					<p>
					Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen.</p>
				</article>
				<article>
					<img src="img/icon2.png" alt="alt text"/>
					<h3>Consectetuer</h3>
					<p>
					Der große Oxmox riet ihr davon ab, da es dort wimmele von bösen Kommata, wilden Fragezeichen...</p>
				</article>
				<article>
					<img src="img/icon3.png" alt="alt text"/>
					<h3>Dolor sit amet</h3>
					<p>
					Es packte seine sieben Versalien, schob sich sein Initial in den Gürtel und machte sich auf den Weg.</p>
				</article>
				<br className="clear"/>
			</section>
   	    	);
   }
}

export default Articles3;