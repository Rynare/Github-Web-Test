// Place in header (do not use async or defer)
document.addEventListener('readystatechange', event => {
    switch (document.readyState) {
        case "loading":
            console.log("document.readyState: ", document.readyState,
                `- The document is still loading.`
            );
            break;
        case "interactive":
            console.log("document.readyState: ", document.readyState,
                `- The document has finished loading DOM. `,
                `- "DOMContentLoaded" event`
            );
            break;
        case "complete":
            console.log("document.readyState: ", document.readyState,
                `- The page DOM with Sub-resources are now fully loaded. `,
                `- "load" event`
            );
            showImage(index)
            break;
    }
});
var index = 0;
showImage(index)

function showImage(i) {
    index += i;
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
    if (index > images.length - 1) {
        index = 0;
    }
    // back to last image if user click prev on 1st image
    if (index < 0) {
        index = images.length - 1;
    }
    // display block only specific image after all image being hidden/none. but except the specific image they are still hidden/none
    images[index].style.display = "block";
    // dots[index].className += " active";
}