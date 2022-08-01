import { useState } from 'react';

const AppFormulariosNoControlados = () => {
	const [search, setSearch] = useState('');
	return (
		<form>
			<input
				type='text'
				name='search'
				defaultValue='Soy el valor por defecto del input '
				onChange={ev => setSearch(ev.target.value)}
			></input>
			<p>Resultados para : {search}</p>
		</form>
	);
};

export default AppFormulariosNoControlados;
