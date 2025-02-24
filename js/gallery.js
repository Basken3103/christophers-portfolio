let dialog = document.getElementById("dialog")
let dialogContent = document.getElementById("dialog-content")

function modal(li) {
    let hiddenContent = li.querySelector(".modal-content")
    dialogContent.innerHTML = hiddenContent.innerHTML
    dialog.showModal()

}

function closeDialog() {
    dialog.close()
    dialogContent.innerHTML = " "
}