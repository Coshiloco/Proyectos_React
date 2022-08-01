import { useState } from 'react';

function AppFormularioControlado() {
	const [search, setSearch] = useState('LearnThis');

	return (
		<form>
			<input
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			></input>
			<p>Resultados para : {search}</p>
		</form>
	);
}

export default AppFormularioControlado;
