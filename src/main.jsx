import ReactDOM from 'react-dom';
import './index.css';

// variables
const curso = 'React';
const secciones = 25;
const pruebabooleano = true;
const undefinedprueba = undefined;
const pruebanull = null;
const unicoobjetopasable = (
	<b>Solo se pueden pasar etiquetas de html a los hijos de un contenedor div</b>
);
const tambienpodemospasarfuncion = () => (
	<h5>Le podemos pasar una funcion que nos ejecute este codigo al hijo</h5>
);
const pruebaarray = ['R', 'e', 'a', 'c', 't'];

const fragmentodereact = (
	<>
		<h1>Esto es un fragmento de react</h1>
		<p>La segunda forma de implementarlo</p>
	</>
);

const app = (
	<div>
		<h1>
			Curso de {curso} que es {pruebabooleano}
		</h1>
		<p>
			Este contenedor es el hijo de root y a su vez hijo del subocontenedor con{' '}
			{undefinedprueba}
		</p>
		<p>
			Este curso de react tiene {secciones} secciones y es prueba de null{' '}
			{pruebanull}
		</p>
		<p>{unicoobjetopasable}</p>
		<p>
			Le estamos pasando una funcion un callback {tambienpodemospasarfuncion()}
		</p>
		<p>
			Porbamos a pintar un array con la palabra React separada {pruebaarray}
		</p>
		<p>POrbamos a pintar un React Fragment {fragmentodereact}</p>
	</div>
);

// Hacemos un nuevo compoenente para estudiar las props de jsx
const appjsx = (
	<div tabIndex={0} aria-label='Hola' data-toggle=''>
		<h1 className='title'>Curso de React estudio de propiedades de JSX</h1>
		<button onClick={() => alert('Acceder')}>Acceder</button>
	</div>
);

const propiedadstyle = (
	<h1
		style={{
			color: 'red',
			fontSize: '1rem'
		}}
	>
		Curso de React propiedad style
	</h1>
);

const propsclassname = {
	class: 'title',
	className: 'title'
};

const { class: className } = propsclassname;

const classnameyhtmlforapp = (
	<div>
		<h1 className={className}>Curso de React propiedad className y htmlFor</h1>
		<form>
			<label htmlFor='text'>Texto</label>
			<input type='text' id='text'></input>
		</form>
	</div>
);

console.log(app);
const container = document.getElementById('root');

ReactDOM.render(app, container);
ReactDOM.render(appjsx, container);
ReactDOM.render(propiedadstyle, container);
ReactDOM.render(classnameyhtmlforapp, container);
