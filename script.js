function previewImage(event) {
    const previewImg = document.getElementById("preview-img");
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result; // Set image source
        };
        reader.readAsDataURL(file); // Convert to Base64
    }
}




function uploadImages(event) {
    const gallery = document.getElementById("gallery");
    const files = event.target.files;

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("gallery-item");

            const img = document.createElement("img");
            img.src = e.target.result;

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = function () {
                imgContainer.remove();
            };

            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteBtn);
            gallery.appendChild(imgContainer);
        };
        reader.readAsDataURL(file);
    }
}
