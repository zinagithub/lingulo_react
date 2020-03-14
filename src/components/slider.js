import React from 'react';
import './slider.css';

class Slider extends React.Component {
	componentDidMount() {
		var myIndex = 0;
		setInterval(function(){
			var i;
		    var x = document.getElementsByClassName("mySlides");
		    for (i = 0; i < x.length; i++) {
		       x[i].style.display = "none";
		    }
		    myIndex++;
		    if (myIndex > x.length) {myIndex = 1}
		    x[myIndex-1].style.display = "block";
		}, 3000);

	}
	render() {
		
        return (
        	<section>
			  <img className="mySlides" src="https://source.unsplash.com/1600x400/?nature,water" />
			  <img className="mySlides" src="https://source.unsplash.com/1600x400/?nature,trees" />
			  <img className="mySlides" src="https://source.unsplash.com/1600x400/?nature,flowers" />
			</section>
        	);
	}
}
export default Slider;