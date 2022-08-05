import { useState } from 'react';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role }) => (
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

export default UserRow;
