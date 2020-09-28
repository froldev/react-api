import React from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header = () => {
	return (
		<header className='Header-header'>
			<img src={logo} className='Header-logo' alt='logo' />
			<h1>Accueil</h1>
		</header>
	);
};

export default Header;
