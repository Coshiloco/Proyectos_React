import './UserRow.css';
const UserRow = ({ name, role }) => (
	<div className='user'>
		<span className='name'>{name}</span>
		<span className='role'>{role}</span>
	</div>
);

export default UserRow;
