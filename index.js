function initGallery() {
    console.log("Page loaded");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

function showImage(previewPic) {
    console.log("Image focused or hovered");

    let displayDiv = document.getElementById("display");

    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

function resetImage() {
    console.log("Image left or blurred");

    let displayDiv = document.getElementById("display");

    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over or focus on an image below.";
}
