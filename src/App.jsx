import UserList from './components/UsersList';

const USERS = [
	{
		id: 0,
		name: 'Pablo Hurtado Gonzalo',
		active: true,
		role: 'student'
	},
	{
		id: 1,
		name: 'Bauty',
		active: true,
		role: 'student'
	},
	{
		id: 2,
		name: 'Ninvel',
		active: false,
		role: 'other'
	},
	{
		id: 3,
		name: 'Isabel Serna Amiga del Alma',
		active: true,
		role: 'teacher'
	}
];

const AppConChildren = () => (
	<UserList initialUsers={USERS}></UserList>
);

export default AppConChildren;
