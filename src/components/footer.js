import React from 'react';
//import './twocol.css';


class Footer extends React.Component {
	render(){
		return (
			<footer>
				
				<section id="copyright">
				<h3 className="hidden">Copyright notice</h3>
				<div class="wrapper">
				<div class="social">
				<a href="#"><img src="img/icon6.png" alt="google plus" width="25"/></a>
				<a href="#"><img src="img/icon7.png" alt="tumblr" width="25"/></a>
				<a href="#"><img src="img/icon8.png" alt="youtube" width="25"/></a>
				<a href="#"><img src="img/icon9.png" alt="bebo" width="25"/></a>
				<a href="#"><img src="img/icon10.png" alt="xing" width="25"/></a></div>
				&copy; Copyright 2012 by <a href="http://www.lingulo.com">Lingulo</a>. All Rights Reserved.</div></section>
				<section class="wrapper">
				<h3 class="hidden">Footer content</h3>
				<article className="column">
				<h4>Lorem ipsum</h4>
				Unterwegs traf es eine Copy. Die Copy warnte das Blindtextchen, da, wo sie herkäme wäre sie zigmal umgeschrieben worden und alles, was von ihrem Ursprung noch übrig wäre, sei das Wort "und" und das Blindtextchen solle umkehren und wieder in sein.</article>
				<article className="column midlist">
				<h4>Consectetuer</h4>
				<ul>
				<li><a href="#">Die Copy warnte das Blindtextchen</a></li>
				<li><a href="#">Unterwegs traf es eine Copy</a></li>
				<li><a href="#">Doch alles Gutzureden konnte</a></li>
				<li><a href="#">Als es die ersten Hügel</a></li></ul></article>
				<article class="column rightlist">
				<h4>Dolor sit amet</h4>
				<ul>
				<li><a href="#"><img src="img/example-slide-1sml.jpg" width="80" alt="some alt text"/><span>Unterwegs traf es eine Copy. Die Copy warnte.</span></a></li>
				<li><a href="#"><img src="img/example-slide-2sml.jpg" width="80" alt="some alt text"/><span>Doch alles Gutzureden konnte es nicht.</span></a></li>
				<li><a href="#"><img src="img/example-slide-3sml.jpg" width="80" alt="some alt text"/><span>Und es dann in ihre Agentur schleppten.</span></a></li></ul></article></section></footer>
							);
	}
}
export default Footer;