
const UserEnableButton = ({activeState, setActiveState}) => {
	return (
		<button
			onClick={() => {
				setActiveState(!activeState);
			}}
		>
			{activeState ? 'Desactivar' : 'Activar'}
		</button>
	);
};

export default UserEnableButton;
