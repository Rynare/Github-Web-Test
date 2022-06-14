function toTheTop() {
	location.href = window.location.href;
}

function autoGrow(element) {
	if (element.scrollHeight <= 250) {
		element.style.height = "5px";
		element.style.height = (element.scrollHeight) + "px";
	}
}