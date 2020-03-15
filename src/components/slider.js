import React from 'react';
import './slider.css';
//import Slide1 from './img/slide1.jpg';

class Slider extends React.Component {
	
	componentDidMount() {
		var myIndex = 0;
		setInterval(function(){
			var i;
		    var x = document.getElementsByClassName("mySlides");
		    console.log(x);
		    for (i = 0; i < x.length; i++) {
		       x[i].style.display = "none";
		    }
		    myIndex++;
		    if (myIndex > x.length) {myIndex = 1}
		    x[myIndex-1].style.display = "block";
		}, 3000);
        
        setTimeout(function(){
        	var spacer= document.querySelector(".slider");
            var newDiv = document.createElement('section');

            var paragSlide = document.createElement('p');
            paragSlide.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?";
            newDiv.classList.add("spacer");
            spacer.appendChild(newDiv);
            var orangeBar = document.querySelector('.spacer');
            orangeBar.style.display ='flex';
            orangeBar.appendChild(paragSlide);
            newDiv = document.createElement('div');
            newDiv.classList.add('search');
            orangeBar.appendChild(newDiv);
            var newForm = document.createElement('form');
            newDiv.appendChild(newForm);
            var input1 = document.createElement('input');
            input1.value = "Enter a word...";
            var input2 = document.createElement('input');
            input2.value = "Search";
            input2.type = "submit"
            input2.classList.add('button');
            var form = document.querySelector("form");
            form.appendChild(input1);
            form.appendChild(input2);
            form.style.display = 'flex';
            //document.querySelector('.button').style.backgroundColor = 'gray'
        }, 3000);
        
        //spacer.className = "spacer"
        
	}
	render() {
		
        return (
        	<section className = 'slider'>
        	  <div className="mySlides ">
			      <img  src='slide1.jpg' alt="slide1" />
			      <div className = "container1">
			           <article id="slider_content1">
							<h3>Lorem ipsum dolor?</h3>
							<p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik.</p>
							<a className="button" href="some_page.html">Mehr lesen</a>  
					   </article>
			      </div>
			  </div>
			  <div className="mySlides ">
			      <img  src="slide2.jpg" alt="slide2" />
			      <div className = "container2">
				      <article id="slider_content2">
						<h3>Nulla consequat</h3>
						<p>Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.</p>
						<a className="button" href="some_page.html">Mehr lesen</a>
					  </article>
				  </div>
			  </div>
			  <div className="mySlides "> 
			      <img  src="slide3.jpg" alt="slide3" />
			      <div className = "container3">
				      <article id="slider_content3">
						<h3>Lorem ipsum</h3>
						<p>Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.</p>
						<a className="button" href="some_page.html">Mehr lesen</a>
						</article>
                 </div>
	          </div>		
			</section>
        	);
	}
}
export default Slider;