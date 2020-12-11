import React, { Component } from 'react';

class ApiCall extends Component {

	constructor(props) {
		super(props);
		this.state = { 
		items: [],
		isLoaded: false,
	}
}

	componentDidMount(){
		fetch('http https://swapi.dev/api/films/1/')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json,
			})
		});
	}
	
	render() {
		var { isLoaded, items } = this.state;
			if (!isLoaded) {
				return <div>Loading...</div>;
			}
			else{
				return (
					<div className="ApiCall">
						<ul>
							{items.map(item => (
								<li key={item.id}>
									{item.planets}
							
								</li>
							))};
						</ul>
						</div>
				)
			}
	}
}

export default ApiCall;