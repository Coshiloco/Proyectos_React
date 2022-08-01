import { useState } from 'react';
import ReactDOM from 'react-dom';
import AppConChildren from './App';
import AppEventBubblingCapturingStopPropagation from './components/EventBubblingCapturingPropagation';
import AppFormulariosNoControlados from './FormulariosNoControlados';
import './styles/index.css';

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

const defaultvalueydefaultchecked = (
	<form>
		<label htmlFor='text'>Texto</label>
		<input type='text' id='text' defaultValue='Valor por Defecto'></input>
	</form>
);

const defaultcheckedprueba = (
	<form>
		<label htmlFor='text'>Texto</label>
		<select defaultValue='c'>
			<option value='a'>A</option>
			<option value='b'>B</option>
			<option value='c'>C</option>
		</select>
		<input type='checkbox' id='text' defaultChecked />
		<input
			type='textarea'
			id='text'
			defaultValue='Tenemos que utilizar defaultchecked'
		/>
		<textarea
			name='areatexto'
			id='text'
			cols='30'
			rows='10'
			defaultValue='Soy el defaultValue tengo que utilizar este'
		></textarea>
	</form>
);

const propiedadescustom = <div cualquiercosa='atributocustom'></div>;

const inputspread = [
	{
		type: 'text',
		name: 'name',
		placeholder: 'Nombre'
	},
	{
		type: 'text',
		name: 'email',
		placeholder: 'Email'
	},
	{
		type: 'password',
		name: 'password',
		placeholder: 'Contraseña'
	}
];

const spreaddepropiedades = (
	<form>
		<input {...inputspread[0]} />
		<input {...inputspread[1]} />
		<input {...inputspread[2]} />
	</form>
);

const inputRendedkeys = inputspread.map(inputProps => (
	<input key={inputProps.name} {...inputProps}></input>
));

console.log(app);
const container = document.getElementById('root');

// Componentes en jsx

const getUser = (name, role) => (
	<div className='user'>
		<span className='name'>{name}</span>
		<span className='role'>{role}</span>
	</div>
);

const componentesapp = (
	<div className='list'>
		{getUser('Pablo Hurtado GOnzalo', 'Estudiante')}
		{getUser('Bauty', 'Estudiante')}
	</div>
);

const Usercomponente = props => {
	return (
		<div className='user'>
			<span className='name'>{props.name}</span>
			<span className='role'>{props.role}</span>
		</div>
	);
};

const appprimeroscomponentespropios = (
	<div className='list'>
		<Usercomponente
			name='Pablo Hurtado Gonzalo'
			role='Estudiante'
		></Usercomponente>
		<Usercomponente name='Bauty' role='Estudiante'></Usercomponente>
	</div>
);

const UerDestructuringProps = ({ name, role, ...restProps }) => (
	<div className='user' {...restProps}>
		<span className='name'>{name}</span>
		<span className='role'>{role}</span>
	</div>
);

const appdestructuringprops = (
	<div className='list'>
		<UerDestructuringProps
			name='Pablo Hurtado Gonzalo'
			role='Estudiante'
			onClick={() => console.log('Click')}
		></UerDestructuringProps>
		<UerDestructuringProps
			name='Bauty'
			role='Estudiante'
		></UerDestructuringProps>
	</div>
);

// Eventos con addEventListener

const Appeventos = () => {
	const [hasListener, setHasListener] = useState(true);
	return (
		<button
			onClick={
				hasListener
					? () => {
							alert('Prueba React');
							setHasListener(false);
					  }
					: undefined
			}
		>
			React
		</button>
	);
};

// PreventDefault

const AppPreveniendoComportamientoPorDefecto = () => (
	<a
		href='https:eactjs.org'
		onClick={ev => {
			ev.preventDefault();
			alert('Navegando en React...');
		}}
	>
		React
	</a>
);

// Target vs CurrentTarget

const Apptarget = () => (
	<div
		onClick={ev => {
			console.log('Target ', ev.target);
			console.log('CurrentTarget ', ev.currentTarget);
		}}
	>
		<button>React</button>
	</div>
);

// COmposicion de componentes

ReactDOM.render(app, container);
ReactDOM.render(appjsx, container);
ReactDOM.render(propiedadstyle, container);
ReactDOM.render(classnameyhtmlforapp, container);
ReactDOM.render(defaultvalueydefaultchecked, container);
ReactDOM.render(defaultcheckedprueba, container);
ReactDOM.render(propiedadescustom, container);
ReactDOM.render(spreaddepropiedades, container);
ReactDOM.render(inputRendedkeys, container);
// Unidad COmponnetes
ReactDOM.render(componentesapp, container);
ReactDOM.render(appprimeroscomponentespropios, container);
ReactDOM.render(appdestructuringprops, container);
ReactDOM.render(<AppConChildren />, container);
ReactDOM.render(<Appeventos />, container);
ReactDOM.render(<AppPreveniendoComportamientoPorDefecto />, container);
ReactDOM.render(<Apptarget></Apptarget>, container);
ReactDOM.render(<AppEventBubblingCapturingStopPropagation />, container);
ReactDOM.render(<AppFormulariosNoControlados />, container);
