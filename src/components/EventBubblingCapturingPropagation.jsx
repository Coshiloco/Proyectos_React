const AppEventBubblingCapturingStopPropagation = () => (
	<div
		onClick={ev => {
			console.log('DIV - onclick');
		}}
		onClickCapture={ev => {
			// ev.stopPropagation();
			console.log('DIV - onClickCapture');
		}}
	>
		<button
			onClick={ev => {
				console.log('BTN - onclick');
			}}
			onClickCapture={ev => {
				ev.stopPropagation();
				console.log('BTN - onClickCapture');
			}}
		>
			React
		</button>
	</div>
);

export default AppEventBubblingCapturingStopPropagation;
