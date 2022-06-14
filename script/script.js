const arra = ["short_article", "about_me", "content", "contact"]

arra.forEach((item, nomer) => {
	var ganti = document.getElementsByClassName(item)[0]
	fetch("./html/" + item + ".html").then(raw => raw.text()).then(ready => ganti.innerHTML = ready)
	if (nomer == (arra.length - 1)) {
		loadScript()
	}
})

function loadScript() {
	let content_src = document.createElement("script")
	content_src.src = "script/img-slider.js"
	document.body.appendChild(content_src)
}

function toTheTop() {
	location.href = window.location.href;
}

function autoGrow(element) {
	if (element.scrollHeight <= 250) {
		element.style.height = "5px";
		element.style.height = (element.scrollHeight) + "px";
	}
}