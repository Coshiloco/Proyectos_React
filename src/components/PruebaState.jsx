import { useState } from 'react';

const PruebaSetState = () => {
	const [reloj, setReloj] = useState(0);

	console.log('Valor del estado antes de ser modificado', reloj);

	const prevstatefuncion = () => {
		setReloj(prevState => {
			console.log('Depues de ejecutar el prevState', prevState);
			return prevState + 5;
		});
	};

	return (
		<div>
			<h1>{reloj}</h1>
			<button
				onClick={() => {
					setReloj(reloj + 1);
					console.log('valor del estado que es nuestra variable reloj ', reloj);
				}}
			>
				Incrementar en uno
			</button>
			<button onClick={prevstatefuncion}>Incrementar en 5</button>
		</div>
	);
};

export default PruebaSetState;
