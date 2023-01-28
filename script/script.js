let navBar = new NavBar().render();
let shortArticle = new ShortArticle().render(document.querySelector(".short_article"));
let aboutMe = new AboutMe();
document.querySelector(".about_me").innerHTML = aboutMe.displayAboutMe();
let content = new Content().render(document.querySelector(".content"));
let contact = new Contact();
document.querySelector('.contact').innerHTML = contact.displaySocialMedia();

function toTheTop() {
	location.href = window.location.href;
}

var ke_n = 0
async function showImage(i) {
	ke_n += i;
	let images = await document.getElementsByClassName("anime_image")

	// set all images to display hidden / none
	for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	// back to 1st image if user click next on last image
	if (ke_n > images.length - 1) {
		ke_n = 0;
	}
	// back to last image if user click prev on 1st image
	if (ke_n < 0) {
		ke_n = images.length - 1;
	}

	// display block only specific image after all image being hidden/none. but except the specific image they are still hidden/none
	images[ke_n].style.display = "block";
}
