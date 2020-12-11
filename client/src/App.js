import React from 'react';
// import './App.scss';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import {Login} from "./components/Login";
import Number from "./components/Number";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Result from "./components/Result";
import Cal from './components/Cal';
import { AuthProvider } from "./context/AuthProvider";



export default function App() { 


	return (
		 <AuthProvider>
		<BrowserRouter>
 			<Navigation />
 			<Switch>
 			<Route path="/" component={Home} exact />
 			<Route path="/login" component={Login} />
 			<Route path="/number" component={Number} />
 			<Route path="/result" component={Result} />			
 			<Route path="/cal" component={Cal} />			
 			<Route component={Error} />
 			</Switch>
 			</BrowserRouter>
		</AuthProvider>
	)
}

