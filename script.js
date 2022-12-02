// Assignment Code
var generateBtn = document.querySelector("#generate");
// var generateBtn = document.querySelector(".btn");

// Our Dataset (Global Variables) 
var hasuppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];   // ARRAY methods (push/add to array) 
var haslowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var hasnumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var hasspecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", ":", ";", "'", ",", "<", ".", ">", "?", "/", "=", "+", "_"];
var allChars = [];

function generatePassword() {
    var userLength = prompt("Number of characters? 8 - 128");
    var randomPassword = "";
    console.log(userLength);
    console.log(typeof userLength);

    // }

    // here is our main program logic 
    // function promptMessage() {

    //     confirmMessage();
    // }

    // function confirmMessage() {

    if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
        alert("Please enter a number between 8 and 128")
        generatePassword();
    } else {

        var lowerCaseInput = confirm("Would you like to include lowercase characters?");
        var upperCaseInput = confirm("Would you like to include uppercase characters?");
        var numberInput = confirm("Would you like to include numbers?");
        var specialInput = confirm("Would you like to include special characters?");
        console.log(lowerCaseInput, upperCaseInput, numberInput, specialInput);
        if (lowerCaseInput == true) {
            //return haslowercase
            allChars = allChars.concat(haslowercase)
            console.log(allChars)
        }
        console.log(upperCaseInput);
        if (upperCaseInput == true) {
            //return hasuppercase
            allChars = allChars.concat(hasuppercase)
            console.log(allChars)
        }
        if (numberInput == true) {
            //return hasnumbers
            allChars = allChars.concat(hasnumbers)
            //console.log(allChars)
        }
        if (specialInput == true) {
            //return hasspecial
            allChars = allChars.concat(hasspecial)
            // console.log(allChars)
        }

        console.log(allChars);
        //console.log(typeof userIn, typeof userConfirm);



        for (var i = 0; i < userLength; i++) {
            var randomIndex = Math.floor(Math.random() * allChars.length)
            var randomChar = allChars[randomIndex]
            randomPassword += randomChar

        }
        console.log(randomPassword);
        return randomPassword;

        // var arr  = [1,2,3,4]
        // arr[2] //3
        // Validate our user input (how?)
        // Conditional Statements
        // if (userLength > 8 && userLength < 128) {
        //     // success
        // } else {
        //     // if error what happens?
        //     alert("Password must be between 8 and 128 characters");

        //     writePassword()
        // }

        // var value = "";

    }

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;
    return; // exit function 
}

generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
// generateBtn.addEventListener("click", promptMessage);
// function promptMessage() {
//     var userLength = prompt("Number of characters? 8 - 128");
//     console.log(userLength);
//     console.log(typeof userLength);

//     confirmMessage();
// }








// generateBtn.addEventListener("click", writePassword);

/*
generateBtn.addEventListener("click", function() {

}); 
*/

