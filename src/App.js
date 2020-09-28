import React, { Component } from 'react'

import Characters from './components/Characters'
import Header from './components/Header'

import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
        <Characters />
			</div>
		);
	}
}

export default App
