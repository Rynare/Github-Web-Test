var ke_n = 0

running()

function running() {
	const arra = ["short_article", "about_me", "content", "contact"]
	arra.forEach(item => ambilResource(item))
}

function ambilResource(source) {
	var ganti = document.getElementsByClassName(source)[0]
	fetch("./html/" + source + ".html").then(response => response.text()).then(response => ganti.innerHTML = response)
}

function toTheTop() {
	location.href = window.location.href;
}

function showImage(i) {
	ke_n += i;
	let images = document.getElementsByClassName("anime_image")
	// var dots = document.getElementsByClassName("anime_dot");
	// set all images to display hidden / none
	for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	// for (i = 0; i < dots.length; i++) {
	// 	dots[i].className = dots[i].className.replace(" active", "");
	// }
	// // back to 1st image if user click next on last image
	if (ke_n > images.length - 1) {
		ke_n = 0;
	}
	// back to last image if user click prev on 1st image
	if (ke_n < 0) {
		ke_n = images.length - 1;
	}
	// display block only specific image after all image being hidden/none. but except the specific image they are still hidden/none
	images[ke_n].style.display = "block";
	// dots[ke_n].className += " active";
}