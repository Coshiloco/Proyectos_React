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
console.log(app);
const container = document.getElementById('root');

ReactDOM.render(app, container);
