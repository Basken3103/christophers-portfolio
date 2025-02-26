//DOM elementer

let slides = document.querySelectorAll(".slide")


//Counter der holder styr på hvilket billede vi er nået til

let slideIndex = 1

//Events der kalder vores funktion
//Timer
window.setInterval(function () {
    showSlides(slideIndex += 1)
}, 4000)

//onClick funktion
function plusSlides(number) {
    showSlides(slideIndex += number)

}

//Funktion der skifter slides
function showSlides(num) {
    //Num må ikke være størrerer end antallet af slides
    if (num > slides.length) {
        slideIndex = 1
    }
    //Num må heller ikke være mindre end 1
    if (num < 1) {
        slideIndex = slides.length
    }

    slides.forEach(function (element, index) {
        element.style.display = "none"
        slides[slideIndex - 1].style.display = "block"
    })
}