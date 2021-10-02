// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function generatePassword() {

    var passwordLength = 0;

    askSize();

    function askSize () {
    //choose the length of the password
    passwordLength = window.prompt("How many characters would you like your password to be? Please select between 8-128 characters.");
   

    console.log(passwordLength);

    if (passwordLength <= 7 || passwordLength >= 129)  {
        alert("Please enter a valid number!"); 
          askSize();
    } else if (isNaN(passwordLength)) {
        alert("Please enter a valid number")
        askSize();
    }};
    
    var lowerCase = 0;
    var upperCase = 0;
    var specialCharacter = 0;
    var numbers = 0;

    characterChoices();

    function characterChoices () {
    
    //include lowercase letters?
    lowerCase = window.confirm("Would you like your password to include lowercase characters?")
        
        console.log(lowerCase)
    //include uppercase letters?
    upperCase = window.confirm("Would you like your password to include Uppercase characters?")
        
        console.log(upperCase)
    
    //include special characters?
    specialCharacter = window.confirm("Would you like your password to include special characters?")

        console.log(specialCharacter)
    
    //include numbers?
    numbers = window.confirm("Would you like your password to include numbers?")

        console.log(numbers)  

    //if no character types are selected please choose at least one character type

     if  (!lowerCase && !upperCase && !specialCharacter && !numbers) {
            alert("Please select at least one character type!");
            characterChoices();
    }} ;


    //select characters based on the confirm windows
    var characterSet = ""

    if (lowerCase) {
        characterSet += "abcdefghijklmnopqrstuvwxyz"
    };
    if (upperCase) {
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    if (specialCharacter) {
        characterSet += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    };
    if (numbers) {
        characterSet += "1234567890"
    };


    //use those characters to loop through and select random characters
    var password = ""
    for (i=0; i< Number(passwordLength); i++) {
        var randomNumber = Math.floor(Math.random()*characterSet.length);
        password += characterSet[randomNumber]
    };
    
    
    return password;
    
};

//function to run generate password and display it on the screen

function writePassword() {

    var password = generatePassword();
    var passwordText = document.getElementById('password');
    passwordText.value = password;

};

