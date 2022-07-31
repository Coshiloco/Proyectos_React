
const AppEventBubblingCapturingStopPropagation = () => {
	<div
		onClick={ev => {
			console.log('DIV - Target', ev.target);
			console.log('DIV - CurrentTarget', ev.currentTarget);
		}}
	>
		<button
		onClick={ev => {
			console.log('BTN - Target', ev.target);
			console.log('BTN - CurrentTarget', ev.currentTarget);
		}}
		>
		React
		</button>
	</div>;
};

export default AppEventBubblingCapturingStopPropagation;
