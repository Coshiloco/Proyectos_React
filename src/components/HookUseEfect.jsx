import { useEffect, useState } from 'react';

const setTitle = count => {
	document.title = count
}

const PruebaUseEffect = () => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	useEffect(() => {
		setTitle(count)
	}, [count]);

	return (
		<div>
			<h1>{count}</h1>
			<h2>Step: {step}</h2>
			<button onClick={() => setCount(count + step)}>+1</button>
			<button onClick={() => setStep(step + 1)}>Incrementar step</button>
		</div>
	);
};

export default PruebaUseEffect;
