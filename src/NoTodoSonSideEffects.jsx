import { useEffect, useState } from 'react';

const getNewValue = () =>
	new Promise(resolve => {
		setTimeout(() => {
			const random = Math.floor(Math.random() * 10);
			resolve(random);
		}, 1000);
	});

const setInitialValue = async setCount => {
	const initialValue = await getNewValue();
	setCount(initialValue);
};

const NoTodoSonSideEffects = () => {
	const [count, setCount] = useState();

	useEffect(() => {
		setInitialValue(setCount);
	}, []);

	if (count === undefined) return <p>Cargando...</p>;

	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={async () => {
					/* Tenemos que generar una funcion asincrona porque el numero que estamos generando 
			  depende de una funcion asincrona que es la de getNewValue por lo tanto 
			  metemos un mensaje para aumentar la experiencia del usuario */
					const newValue = await getNewValue();
					setCount(newValue);
				}}
			>
				Random
			</button>
		</div>
	);
};

export default NoTodoSonSideEffects;
