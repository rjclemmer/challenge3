// Assignment Code


// Add event listener to generate button
// When button is clicked, it will activate the writePassword function
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


  



// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  

  
function generatePassword(){

// Bank of possible characters
// uppercase
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// // lowercase
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// // numbers
var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // symbols
var symbols = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|','/','?','<','>',','];

// possible character variable
var possibleCharacters = []

// length of passwork between 8 and 128
var numberCharacters = prompt("How many characters do you want in your password? Password length needs to be between 8 and 128 characters.")
  if (numberCharacters < 8 || numberCharacters > 128) {

// returns if number isn't between 8-128 or Not A Number
  return "Please choose a number between 8 and 128 characters.";
   } else if (isNaN(numberCharacters)){
    return "Please choose a number between 8 and 128 characters.";
   } else {
   alert("Your password will be " + numberCharacters + " characters long.") ;
   }

  
// confirming character variables

var hasUpper = confirm("Do you want to include Uppercase characters to your password?");
  if (hasUpper) {
    alert("Your password will include Uppercase Letters.");
  } else {
    alert("Your password will not include Uppercase Letters.");
  }

var hasLower = confirm("Do you want to include Lowercase characters to your password?");
  if (hasLower) {
    alert("Your password will include Lowercase Letters.");
  } else {
    alert("Your password will not include Lowercase Letters.");
  }
  
var hasNumbers =confirm("Do you want to include Numbers to your password?");
  if (hasNumbers) {
    alert("Your password will include Numbers.");
  } else {
    alert("Your password will not include Numbers.");
  }
  
var hasCharacter =confirm("Do you want to include various Characters to your password?");
  if (hasCharacter) {
    alert("Your password will include various Characters.");
  } else {
    alert("Your password will not include various Characters.");
  }

  if (hasUpper === false && hasLower === false && hasNumbers === false && hasCharacter === false) {
    alert("Please select at least one type of characters");
    return "Please select at least one type of characters";
  }
  
  // concating possible characters into one array
  if(hasUpper) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    
  }

  if(hasLower) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    
  }
  if(hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    
  }
  if(hasCharacter) {
    possibleCharacters = possibleCharacters.concat(symbols);
    
  }
    console.log(possibleCharacters)

    // generating password

let yourPassword = ''
  for (i=0; i < numberCharacters; i++) {
      let randomIndex = [Math.floor(Math.random() * possibleCharacters.length)];
      yourPassword = yourPassword + possibleCharacters[randomIndex];
  }
    return yourPassword
  }

