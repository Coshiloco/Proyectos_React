import { useEffect, useState } from 'react';

const AppSideEffects = () => {
	const [count, setCount] = useState(10);
	const [play, setPlay] = useState(true);

	useEffect(() => {
		if (!play) return;
		const intervalId = setInterval(() => {
			setCount(prevCount => prevCount - 1);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [play]);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setPlay(!play)}>
				{play ? 'Pausar' : 'Continuar'}
			</button>
		</div>
	);
};

export default AppSideEffects;
