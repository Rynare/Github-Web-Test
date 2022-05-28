var index = 0;

show_image(index);

function show_image(i) {
	index += i;

	var images = document.getElementsByClassName("anime_image");

	var dots = document.getElementsByClassName("anime_dot");
	// set all images to display hidden/none
	for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	// back to 1st image if user click next on last image
	if (index > images.length - 1) {
		index = 0;
	}
	// back to last image if user click prev on 1st image
	if (index < 0) {
		index = images.length - 1;
	}
	// display block only specific image after all image being hidden/none. but except the specific image they are still hidden/none
	images[index].style.display = "block";
	dots[index].className += " active";
}

function tothetop() {
	location.href = window.location.href;
}

function auto_grow(element) {
	if (element.scrollHeight <= 250) {
		element.style.height = "5px";
		element.style.height = (element.scrollHeight) + "px";
	}
}