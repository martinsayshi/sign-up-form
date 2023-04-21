const password = document.querySelector("#psw");
const confirmPassword = document.querySelector("#cpsw");
const span = document.querySelector(".psw-error");
const form = document.querySelector("#form");
const button = document.querySelector("button");

function checkPassword() {
    let check = password.value === confirmPassword.value ? "Passwords match" : "Passwords do not match";
    return check;
}

function setText() {
    span.textContent = checkPassword();
    if (span.textContent === "Passwords match") {
        span.style.color = "green";
    } else {
        span.style.color = "red";
    }
}
password.addEventListener('input', setText);
confirmPassword.addEventListener('input', setText);

button.addEventListener('click', function() {
    form.submit();
});