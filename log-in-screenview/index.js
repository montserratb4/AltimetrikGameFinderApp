/* inputs validation */
function login() {
  var email, password;

  email = document.getElementById("emailInput").value;
  password = document.getElementById("passwordInput").value;

  if (email == "janedoe@gmail.com" && password == "Games123@") {
    window.location = "main.html";
  }
}

/* remember me checkbox functionality */
const checkboxCheck = document.getElementById("checkBox"),
  email = document.getElementById("emailInput");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  checkboxCheck.setAttribute("checked", "checked");
  email.value = localStorage.username;
} else {
  checkboxCheck.removeAttribute("checked");
  email.value = "";
}

function rememberMeCheckbox() {
  if (checkboxCheck.checked && email.value !== "") {
    localStorage.username = email.value;
    localStorage.checkbox = checkboxCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

/* password visibility */
var state = false;
function toggle() {
  if (state) {
    document.getElementById("passwordInput").setAttribute("type", "password");
    state = false;
  } else {
    document.getElementById("passwordInput").setAttribute("type", "text");
    state = true;
  }
}
