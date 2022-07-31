import { useState } from 'react';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role }) => {
	// Almacenamos el estado del usuario al momento de su creacion
	// Para pasar el estado de activo o inactivo al ReactDOm
	const [isActive, seiIsActive] = useState(active);
	// Por el que vamos a cambiar
	const newrole = isActive ? role : 'standby';
	// Podemos poner un texto tambien que cuando la variable este inactiva le ponemos esta inactivo
	const nombreInactivo = isActive ? name : `${name} esta inactivo`;
	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{nombreInactivo}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={isActive}></UserStatus>
			</div>
			<div className={style.role}>
				<UserRole role={newrole}></UserRole>
			</div>
			<div className={style.action}>
				<button
					onClick={() => {
						seiIsActive(!isActive);
					}}
				>
					{isActive ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;
