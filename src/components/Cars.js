import React from 'react';

const Car = ({children, color}) => {
	const ColorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: néant</p>)
	if (children){
		return (
			<div style={ {backgroundColor: 'pink', width :'400px', margin: '5px auto', padding: '10px'} }>
				<p>Marque: {children}</p>
				{ ColorInfo }

				
			</div>
		)
	}else{
		return (
			<div style={ {backgroundColor: 'pink', width :'400px', margin: '5px auto', padding: '10px'} }>
				<p>pas de data !</p>
			</div>
		)
	}

}

export default Car;