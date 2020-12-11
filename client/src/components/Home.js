import React from 'react';
import '../styles/App.css';
import ApiCall from '../ApiCall';

const Home = () => {
	return (
		<div>
			<ApiCall/>
			<h1>Välommen till Dyskalkylator!</h1>
		</div>
	);
};

export default Home;