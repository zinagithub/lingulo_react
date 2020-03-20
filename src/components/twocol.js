import React from 'react';
import './twocol.css';


class TwoCol extends React.Component {
	render(){
		return (
			<section id="text_columns">
				
				<article className="column1">
				<h3>
				Dolor sit amet</h3>
				<p>Unterwegs traf es eine Copy. Die Copy warnte das Blindtextchen, da, wo sie herkäme wäre sie zigmal umgeschrieben worden und alles, was von ihrem Ursprung noch übrig wäre, sei das Wort "und" und das Blindtextchen solle umkehren und wieder in sein eigenes, sicheres Land zurückkehren.</p>
				<p>Doch alles Gutzureden konnte es nicht überzeugen und so dauerte es nicht lange, bis ihm ein paar heimtückische Werbetexter auflauerten, es mit Longe und Parole betrunken machten und es dann in ihre Agentur schleppten, wo sie es für ihre Projekte wieder und wieder mißbrauchten.</p></article>
				<section className="column2">
				<h3 className="hidden">Lorem Impsum</h3>
				<article class="row">
				<h4 class="hidden">Dolor sit</h4>
				<img src="img/icon4.png" width="80" className="rocket" alt="Some alt text"/>
				<p>Und wenn es nicht umgeschrieben wurde, dann benutzen Sie es immernoch.</p></article>
				<article className="row">
				<h4 className="hidden">Ipsum</h4>
				<img src="img/icon5.png" width="80" class="clock" alt="Some alt text"/>
				<p>Doch alles Gutzureden konnte es nicht überzeugen und so dauerte es nicht.</p></article>
			</section></section>
			);
	}
}
export default TwoCol;