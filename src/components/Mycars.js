import React, { Component } from 'react';
import Car from './Cars';


class Mycars extends Component {
	noCopy = () => {
		alert('merci de ne pas copier le texte')
	}
	
	
	render() {
		console.log(this);
		return(
			<div>
				<h1>{this.props.title} </h1> 

				<p onCopy={this.noCopy}>Deserunt incididunt reprehenderit ullamco nulla commodo incididunt. Tempor ipsum laboris labore labore ut in fugiat cillum elit irure consequat. Pariatur mollit culpa deserunt reprehenderit et. Est do laboris laborum cupidatat dolor. Fugiat nulla amet proident eiusmod nulla eu incididunt ex nulla. Ex labore non eu qui aliqua exercitation voluptate do ad nisi enim. Irure pariatur aliquip deserunt nulla sint velit anim in reprehenderit.</p>
				<Car color= 'red'> Ford</Car>
				<Car> Mercedes</Car>
				<Car color= 'black'></Car>
			</div>
		) 

	}
}


export default Mycars;
  