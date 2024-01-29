import React from "react";
import './Sidebar.css';
import '../media-query.css';
import Logo from '../assets/icons/logo-spotify.png';

const Sidebar = () =>{
	return(
		<div ClassName="sidebar">
		<nav ClassName="sidebar__navigation">
		  <div ClassName="logo">
			<a href="">
			  <img src={Logo}alt="Logo" />
			</a>
		  </div>
		  <ul>
			<li>
			  <a href="/">
				<span ClassName="fa fa-home"></span>
				<span>Início</span>
			  </a>
			</li>
			<li>
			  <a href="">
				<span ClassName="fa fa-search"></span>
				<span>Buscar</span>
			  </a>
			</li>
		  </ul>
		</nav>
	
		<div ClassName="library">
		  <div ClassName="library__content">
			<button ClassName="library__button">
			  <span ClassName="fa fas fa-book"></span>
			  <span>Sua biblioteca</span>
			</button>
			<span ClassName="fa fa-plus"></span>
		  </div>
	
		  <section ClassName="section-playlist">
			<div ClassName="section-playlist__content">
			  <span ClassName="text title">Crie sua primeira playlist</span>
			  <span ClassName="text subtitle">É fácil, vamos te ajudar.</span>
			  <button ClassName="section-playlist__button">
				<span>Criar playlist</span>
			  </button>
			</div>
		  </section>
	
		  <div ClassName="cookies">
			<a href="">Cookies</a>
		  </div>
	
		  <div ClassName="languages">
			<button ClassName="languages__button">
			  <span ClassName="fa fa-globe"></span>
			  <span>Português do Brasil</span>
			</button>
		  </div>
		</div>
	  </div>
	);
};

export default Sidebar;