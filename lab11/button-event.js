
function handleButtonClick(event) {
	alert("Thanks for clicking! (Via External JS)");
}


document.addEventListener('DOMContentLoaded', () => {
	const jsButton = document.getElementById('js-button');

	if (!jsButton) {
		
		console.warn("Button with id 'js-button' not found. Click listener not attached.");
		return;
	}

	jsButton.addEventListener('click', handleButtonClick);
});

