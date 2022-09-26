import { useEffect, useState } from 'react';

const getInitialValue = () =>
	new Promise(resolve => {
		setTimeout(() => resolve(5), 2000);
	});

const setInitialValue = async setCount => {
	const initialValue = await getInitialValue();
	setCount(initialValue);
};

const ContadorAsincrono = () => {
	const [count, setCount] = useState();

	// Para que funcione de manera sincrona
	// se tiene que hacer con un side effect
	// que en mayor emdidad es el hook del useEffect
	//  de ninguna manera podemos inicializar un estado con una funcion
	// asincrona porque los componentes siempre nos tienen que pintar algo

	useEffect(() => {
		setInitialValue(setCount);
	}, []);

	// Para darle una buena experiencia al usuario podemos poner un cargando
	// Que le ayude a saber al usuario que esta haciendo la aplicacion
	// Por detras

	if (count === undefined) return <p>Cargando...</p>;

	/* si pones count como estado en !de 0 
  te va a dar cargando otod el rato
  porque siempre va a entrar en el if
  porque lo contrario de 0 es true
  */

	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Incrementar
			</button>
		</div>
	);
};

export default ContadorAsincrono;
