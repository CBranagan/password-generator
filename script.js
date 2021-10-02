


// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function generatePassword() {

    //choose the length of the password
    var passwordLength = window.prompt("How many characters would you like your password to be? Please select between 8-128 characters.");
    console.log(passwordLength);
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Please enter a valid number!"); 
        generatePassword();   
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

     if  (!lowerCase && !upperCase && !specialCharacter && !numbers) {
            alert("Please select at least one character type!");
            generatePassword();
    } 

    var characterSet = ""

    if (lowerCase) {
        characterSet += "abcdefghijklmnopqrstuvwxyz"
    };
    if (upperCase) {
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    if (specialCharacter) {
        characterSet += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
    if (numbers) {
        characterSet += "1234567890"
    }

    var password = ""
    for (i=0; i< Number(passwordLength); i++) {
        var randomNumber = Math.floor(Math.random()*characterSet.length);
        password += characterSet[randomNumber]
    };
    return password;
    
}


function writePassword() {

    var password = generatePassword();
    var passwordText = document.getElementById('password')
    passwordText.value = password

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
