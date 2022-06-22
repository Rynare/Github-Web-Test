document.getElementsByTagName('dialog')[0].style.display = 'flex'
new short_article().init()
new about_me().init()
new content().init()
new contact().init()
document.getElementsByTagName('dialog')[0].style.display = 'none'

function toTheTop() {
	location.href = window.location.href;
}

var ke_n = 0

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