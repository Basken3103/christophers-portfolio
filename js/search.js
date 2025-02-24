let query = [
    "arne",
    "socialpædagog",
    "kontakt",
    "foto",
    "flex"
]

let urls = [
    ["index.html", "foto.html", "kontakt.html"],
    ["index.html"],
    ["kontakt.html"],
    ["foto.html"],
    ["index.html", "foto.html", "kontakt.html"]
]

let url = window.location.href
url = new URL(url)
let searchString = url.searchParams.get("search")
let results = false;
let htmlOutput = "Din søgning på <i>" + searchString + "</i> gav ingen resultater"
query.forEach(function (element, index) {
    if (results == false) {

        if (searchString.toLowerCase() == element) {
            htmlOutput = "Din søgning på <i>" + searchString + "</i> gav flg. resultater <br>"
            urls[index].forEach(function (elm) {
                htmlOutput += "<a href='" + elm + "'>" + elm + "</><br>"
            })
            document.getElementById("search-results").innerHTML = htmlOutput
            results = true

        }

    }

})
document.getElementById("search-results").innerHTML = htmlOutput