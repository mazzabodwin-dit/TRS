/* global $ 

/* Reset password - conditions */

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var captial = document.getElementById("captial");
var special = document.getElementById("special");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

   // Validate upper case letters
   var upperCaseLetters = /[A-Z]/g;
   if(myInput.value.match(upperCaseLetters)) {  
     captial.classList.remove("invalid");
     captial.classList.add("valid");
   } else {
    captial.classList.remove("valid");
    captial.classList.add("invalid");
   }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate special chars
  var specialChars = /(?=.*?[#?!@$%^&*-])/g;
  if(myInput.value.match(specialChars)) {  
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  } 
}



/* global $ */

let srPasswordText = document.querySelector("#password-text");
let passwordInput = document.querySelector("input");
let showPasswordButton = document.querySelector("#show-password");
let toggleImage = document.querySelector(".show-icon");
let showPasswordImage = "Show password";
let hidePasswordImage = "Hide password";

let handleTogglePasswordVisibility = (e) => {
let buttonState = showPasswordButton.getAttribute("aria-pressed");

showPasswordButton.setAttribute(
"aria-pressed",
buttonState === "false" ? "true" : "false"
);
srPasswordText.innerText =
buttonState === "true" ? "Password hidden" : "Password shown";
passwordInput.type = buttonState === "true" ? "password" : "text";
toggleImage.innerText =
buttonState === "true" ? showPasswordImage : hidePasswordImage;
};

showPasswordButton.addEventListener("click", handleTogglePasswordVisibility);
