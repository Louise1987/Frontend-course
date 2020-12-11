import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";
import '../styles/App.css';

const Navigation = () => {
	const [authenticatedUser,] = useContext(AuthContext); //AuthContext hämtar information från den som loggar in och sparar till useContext
	return (

		<div className="navMenu">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/Login">Login</NavLink>
			<NavLink to="/Number">Number</NavLink>
			<NavLink to="/Result">Result</NavLink>
			<NavLink to="/Cal">Calculate</NavLink>
			<span className="userName">{authenticatedUser}</span>
		</div>
	);
};

export default Navigation;