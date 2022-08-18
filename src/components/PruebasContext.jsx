import { createContext, useContext, useState } from 'react';

const CountContext = createContext();
const HelloContext = createContext();

const Counter = () => {
	console.log('Counter');
	const count = useContext(CountContext);
	return <h1>{count}</h1>;
};

const Hello = () => {
	console.log('Hello');
	const hello = useContext(HelloContext);
	return <h1>{hello ? 'Hola' : 'Adios'}</h1>;
};

const Wrapper = ({ children }) => {
	console.log('Wrapper');
	const [count, setCount] = useState(0);
	const [hello, setHello] = useState(true);

	return (
		<CountContext.Provider value={count}>
			<HelloContext.Provider value={hello}>
				<div>
					<button onClick={() => setCount(count + 1)}>Incrementar</button>
					<button onClick={() => setHello(!hello)}>Saludar</button>
					{children}
				</div>
			</HelloContext.Provider>
		</CountContext.Provider>
	);
};

const AppEntendiendoCOntexto = () => {
	console.log('AppEntendiendoCOntexto');
	return (
		<Wrapper>
			<Counter />
			<Hello />
		</Wrapper>
	);
};

export default AppEntendiendoCOntexto;
