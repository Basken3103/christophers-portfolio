let dialog = document.getElementById("dialog")

function modal(image) {

    dialog.showModal()
    document.getElementById("dialog-img").src = image.src
}

function closeDialog() {
    dialog.close()
}