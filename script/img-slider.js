// Place in header(do not use async or defer)
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

function autoGrow(element) {
    if (element.scrollHeight <= 250) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    }
}