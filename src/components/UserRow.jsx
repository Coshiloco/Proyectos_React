import { useState } from 'react';
import UserEnableButton from './UserEnableButton';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role }) => {
	// Almacenamos el estado del usuario al momento de su creacion
	// Para pasar el estado de activo o inactivo al ReactDOm
	const [activeState, setActiveState] = useState(active);
	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={activeState}></UserStatus>
			</div>
			<div className={style.role}>
				<UserRole role={role}></UserRole>
			</div>
			<div className={style.action}>
				<UserEnableButton
					activeState={activeState}
					setActiveState={setActiveState}
				></UserEnableButton>
			</div>
		</div>
	);
};

export default UserRow;
