var Name = document.getElementById("Name")
var Mail = document.getElementById("Email")
var Password = document.getElementById("Password")
var Name_key = document.getElementById("Name_key")
var Mail_key = document.getElementById("Mail_key")
var Password_key = document.getElementById("Password_key")
var button = document.getElementById("button")
var final = document.querySelector(".final")
var password = document.getElementById("Password")
var eyeOpen = document.getElementById("eye2")
var eyeClose = document.getElementById("eye1")


button.onclick = function () {

    let valid = true

    if (Name.value == "") {
        Name_key.style.display = "block"
        valid = false
    } else {
        Name_key.style.display = "none"
    }

    if (Mail.value == "") {
        Mail_key.style.display = "block"
        valid = false
    } else {
        Mail_key.style.display = "none"
    }

    if (Password.value.length < 6) {
        Password_key.style.display = "block"
        Password_key.textContent = "Password needs " + (6 - Password.value.length) + " more characters"
        valid = false
    } else {
        Password_key.style.display = "none"
    }

    if (valid) {
        final.style.display = "block"
    }
}
eyeOpen.onclick = function () {

    password.type = "text"

    eyeOpen.style.display = "none"
    eyeClose.style.display = "inline"

}

eyeClose.onclick = function () {

    password.type = "password"

    eyeClose.style.display = "none"
    eyeOpen.style.display = "inline"

}