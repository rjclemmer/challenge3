// Assignment Code

var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // prompts for password criteria
// Uppercase
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// lowercase
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// numbers
var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// symbols
var symbols = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|','/','?','<','>',',']

confirm("test test")
alert("test")
prompt("yes?")


passwordText.value = password;

}




// length of passwork between 8 and 128

// at least one character type should be selected

// password is displayed or written on page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


