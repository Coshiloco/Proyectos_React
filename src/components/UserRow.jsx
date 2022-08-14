import {useContext} from 'react'
import { UsersContext } from '../lib/contexts/UsersContext';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ id, name, active, role }) => {
	const { setUserChanged } = useContext(UsersContext);
	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={active}></UserStatus>
			</div>
			<div className={style.role}>
				<UserRole role={role}></UserRole>
			</div>
			<div className={style.action}>
				<button
					onClick={() => {
						setUserChanged(id)
					}}
				>
					{active ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;
