import style from './UserRole.module.css';

const UserRole = ({ role }) => {
	//  Posibles tilos de lo que viene siendo los roles
	const ROLES_STYLES = {
		teacher: ['Profesor', style.teacher],
		student: ['Alumno', style.student],
		other: ['Otro', style.other]
	};
	// O alternativa de roll de otro destructuring
	const [roleName, roleClassname] = ROLES_STYLES[role] || ROLES_STYLES.other;

	return <span className={`${style.role} ${roleClassname}`}>{roleName}</span>;
};

export default UserRole;
