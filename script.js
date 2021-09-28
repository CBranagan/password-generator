// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //choose the length of the password
    var passwordLength = window.prompt("How many characters would you like your password to be? Please select between 8-128 characters.");
    console.log(passwordLength);
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Please enter a valid number!"); 
        writePassword();   
    }
    //include lowercase letters?
    var lowerCase = window.confirm("Would you like your password to include lowercase characters?")
        
        console.log(lowerCase)
    //include uppercase letters?
    var upperCase = window.confirm("Would you like your password to include Uppercase characters?")
        
        console.log(upperCase)
    
    //include special characters?
    var specialCharacter = window.confirm("Would you like your password to include special characters?")

        console.log(specialCharacter)
    
    //include numbers?
    var numbers = window.confirm("Would you like your password to include numbers?")

        console.log(numbers)

    if (!lowerCase && !upperCase && !specialCharacter && !numbers) {
        alert("Please select at least one character type!");
        writePassword();
    }

    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

