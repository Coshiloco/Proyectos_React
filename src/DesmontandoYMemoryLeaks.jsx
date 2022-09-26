import { useEffect, useState } from 'react';

/* Como recordario cuando 
 ponemos los corchetes de un array como segundo parametro 
 en el useEffect se llaman dependencias 
 estas pueden ser desde variables hasta funciones */

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setCount(prevCount => prevCount + 1),
			5000
		);
		return () => {
		  // Se ejecuta siempre antes de que se desmonte el componente 
			console.log('Clear Interval');
			clearInterval(intervalId);
		};
	}, []);

	return <h1>{count}</h1>;
};

/* formulando la hipotesis dle memory leak 
puede que signifique que como en la linea 26 tenemos un 
condicional que lo que quiere decir que cuando 
el estado de visible que esta inicializado como true 
esta en el 26 se pinta el componente de Counter 
porque cumple la condicion que de que el estado de visible esta a teue 
sin embargo cuando este esta false no se pinta 
el componente 
pero si hacemos que sea true otra vez debido a que tiene 
que renderizar de nuevo el componente 
la informacion del estado se resetea porque vuelve a carga desde el inicio
el codigo del susodicho componente 
Por tanto se denomina memory leak a la imposibilidad de poder parar 
la creacion de los intervalos que como recordemos es infinita y debido a lo explicado 
arriba y dado que la unica manera de acceder a estos es con IntervalID no podemos pararlo
ocasionando un memory leak 
Tal cual habia determinado por la determinacion de los hechos olo 
se va a pintar counter si en la linea que va depsues del div
cumple y solo si este estado de visible tiene como valor
el flag o bandera true 
Por lo tanto como este estado se desmonta el useEffect va a seguir modificando 
este estado aun cuando este ya no existe por la ocultacion 
del componente Counter y el nuevo renderizado que este tiene que hacer 
al poner el estado de visible en true otra vez porque ahi esta el verdadero 
truco y es que useeffect siempre se va a ejecutar mientras la aplicacion este 
corriendo y el setInterval va a ejecutar intervalos de forma infinita que en el 
punto en que el estado visible sea false no podremos parar de ninguna manera 
Por tanto React nos dara un error de que no se puede actualizar el estado 
de un componente que esta desmontado es decir aquel que ni se esta pintando 
ni se esta renderizando */

/* Importante React cuando detecta que un componente se va a desmontar es decir
no se va a renderizar mas lo que hace es ejecutar todas las limpiezas de side-effects 
que esten pendiendes como es el clearInterval una limpieza d eun side effect 
que es el setInterval 
empezando por su puesto por la inicializacion del estado que es 0 */

const DesmontandoYMemoryLeaks = () => {
	const [visible, setVisible] = useState(true);

	return (
		<div>
			{visible && <Counter />}
			<button onClick={() => setVisible(!visible)}>
				{visible ? 'Ocultar' : 'Mostrar'}
			</button>
		</div>
	);
};

export default DesmontandoYMemoryLeaks;
