import React from "react";
import './Footer.css';
import '../media-query.css';

const Footer = () =>{
	return(
		<footer ClassName="disclaimer-premium">
		<div ClassName="text">
		  <p ClassName="disclaimer-premium__title">Testar o Premium de graça</p>
		  <p ClassName="disclaimer-premium__subtitle">
			Inscreva-se para curtir música ilimitada e podcasts só com alguns
			anúncios. Não precisa de cartão de crédito.
		  </p>
		</div>
		<div ClassName="button">
		  <button type="button">Inscreva-se grátis</button>
		</div>
	  </footer>
	);
};

export default Footer;