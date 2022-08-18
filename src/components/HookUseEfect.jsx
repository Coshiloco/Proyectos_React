import { useEffect, useState } from 'react';

const PruebaUseEffect = () => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	useEffect(() => {
		document.title = count;
	}, [count]);

	return (
		<div>
			<h1>{count}</h1>
			<h2>Step: {step}</h2>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setStep(step + 1)}>Incrementar step</button>
		</div>
	);
};

export default PruebaUseEffect;
