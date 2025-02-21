let url = window.location.href

url = new URL(url)

let firstName = url.searchParams.get("firstName")

let lastName = url.searchParams.get("lastName")

let email = url.searchParams.get("email")

let span = document.getElementById("user")

if (firstName != null || lastName != null) {
    span.innerHTML = firstName + " " + lastName
}

