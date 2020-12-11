import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import '../styles/Login.css';
import {AuthContext} from "../context/AuthProvider";
import '../styles/App.css';

export const Login = () =>{
	const history = useHistory();
	const [username, setUsername] = useState("")
	const [, setPassword] = useState("")
	const [, setAuthenticatedUser] = useContext(AuthContext); //data från input data hämtas och sparar till AuthContext
	const login = () => {
		setAuthenticatedUser(username);
		history.push("/number");
	}

	return (
	
	<div className="loginForm">
	<body>
		<span>User name:</span><input onChange={(e)=> setUsername(e.target.value)} /><br/>
		<span>Password:</span><input onChange={(e)=> setPassword(e.target.value)}/><br/>
		<button onClick={()=> login()}>Login</button>
		</body>
	</div>
	)
}

