import Title from './components/Title';
import UserList from './components/UsersList';

const USERS = [
	{
		name: 'Pablo Hurtado Gonzalo',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Bauty',
		active: true,
		role: 'student'
	},
	{
		name: 'Ninvel',
		active: false,
		role: 'other'
	}
];

const AppConChildren = () => (
	<UserList users={USERS}>
		<Title>Liston de tablon de USuarios</Title>
	</UserList>
);

export default AppConChildren;
