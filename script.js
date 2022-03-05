// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    function getLength() {
        var passwordLength = parseInt(window.prompt("How many characters should your password contain?"));
        if (isNaN(passwordLength)) {
            window.alert("That isn't a number!");
            return getLength();
        } else if (passwordLength > 128 || passwordLength < 8) {
            window.alert("You must select a number between 8 and 128!");
            return getLength();
        }
        return passwordLength;
    }
    var passwordLength = getLength();
    console.log(passwordLength);
    let wantsLowercase = window.confirm("Should your password contain lowercase letters?");
    let wantsUppercase = window.confirm("Should your password contain uppercase letters?");
    let wantsSpecialChars = window.confirm("Should your password contain special characters?");
    let wantsNumbers = window.confirm("Should your password contain numbers?");

    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
    let numbers = ["1", "2", "3", "4", "5", "7", "8", "9", "0"];

    var characterList = [];
    if (wantsLowercase) {
        var characterList = characterList.concat(lowercase);
    }
    if (wantsUppercase) {
        var characterList = characterList.concat(uppercase);
    }
    if (wantsSpecialChars) {
        var characterList = characterList.concat(specialChars);
    }
    if (wantsNumbers) {
        var characterList = characterList.concat(numbers);
    }

    var userPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        var newCharacter = Math.floor(Math.random() * characterList.length);
        var userPassword = userPassword.concat(characterList[newCharacter]);
    }
    return userPassword;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
