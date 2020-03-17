import React from 'react';

class FourCol extends React.Component {
	render(){
		return (
			<section id="four_columns">
				<h2>
				Lorem ipsum</h2>
				<article className="img-item">
					<figure>
					<a href="img/example-slide-1.jpg" rel="lightbox" title="Some Title">
					<span className="thumb-screen"></span>
					<img src="img/example-slide-1sml.jpg" alt="Some alt text"/></a>
					<figcaption>
					<strong>
					Photo by: Some Name</strong>
					Als es die ersten Hügel des Kursivgebirges erklommen hatte</figcaption>
					</figure>
				</article>
				<article className="img-item">
				
				<figure>
				<a href="img/example-slide-2.jpg" rel="lightbox" title="Some Title">
				<span className="thumb-screen"></span>
				<img src="img/example-slide-2sml.jpg" alt="Some alt text"/></a>
				<figcaption>
				<strong>
				Photo by: Some Name</strong>
				warf es einen letzten Blick zurück auf die Skyline seiner Heimatstadt Buchstabhausen</figcaption></figure></article>
				<article className="img-item">
				
				<figure>
				<a href="img/example-slide-3.jpg" rel="lightbox" title="Some Title">
				<span className="thumb-screen"></span>
				<img src="img/example-slide-3sml.jpg" alt="Some alt text"/></a>
				<figcaption>
				<strong>
				Photo by: Some Name</strong>
				die Headline von Alphabetdorf und die Subline seiner eigenen Straße.</figcaption></figure></article>
				<article className="img-item">
				
				<figure>
				<a href="img/example-slide-4.jpg" rel="lightbox" title="Some Title">
				<span className="thumb-screen"></span>
				<img src="img/example-slide-3sml.jpg" alt="Some alt text"/></a>
				<figcaption>
				<strong>
				Photo by: Some Name</strong>
				Wehmütig lief ihm eine rhetorische Frage über die Wange.</figcaption></figure></article>
				<br className="clear"/>
		</section>
			);
	}
}
export default FourCol;