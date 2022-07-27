import Title from './components/Title';
import UserList from './components/UsersList';

const USERS = [
	{
		name: 'Pablo Hurtado Gonzalo',
		activo: true,
		role: 'estudiante'
	},
	{
		name: 'Bauty',
		activo: true,
		role: 'estudiante'
	},
	{
		name: 'Ninvel',
		activo: false,
		role: 'estudiante'
	}
];

const AppConChildren = () => (
	<UserList users={USERS}>
		<Title>Liston de tablon de USuarios</Title>
	</UserList>
);

export default AppConChildren;
