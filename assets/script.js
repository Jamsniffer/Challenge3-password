// Assignment code here
var lwrChecked;
var uprChecked;
var specChecked;
var numChecked;
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["/", "@", "$", "%","#","&","+","_","-","|","*"]; 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var lowerCaseCheckbox = document.getElementById("lwr");
    var upperCaseCheckBox = document.getElementById("upr");
    var numberCheckBox = document.getElementById("nmr");
    var specialCheckBox = document.getElementById("spe");
    var lengthInputfield = document.getElementById("length");
    var lwrChecked = lowerCaseCheckbox.checked;
    var uprChecked = upperCaseCheckBox.checked;
    var specChecked = specialCheckBox.checked;
    var numChecked = numberCheckBox.checked;
    var passLength = lengthInputfield.value;

    if (passLength < 8 || passLength > 128) {
        window.alert("Please choose a valid number");
        return;
    }
    var randomPassword="";
    if (!uprChecked && !lwrChecked && !specChecked && !numChecked) {
           window.alert("Please check a box");
           return;
    }
    for (var i =0 ; i < passLength; i++){ // 8
        var chars = ""; 
        if (lwrChecked) {
            chars+= alphabet[Math.floor(Math.random() * (alphabet.length))].toLowerCase();
        }
        if (uprChecked){
            chars+= alphabet[Math.floor(Math.random() * (alphabet.length))];
        }
        if (specChecked) {
            chars+= specialCharacters[Math.floor(Math.random() * (specialCharacters.length))];
        }
        if (numChecked) {
            chars+= "" + Math.floor(Math.random() * 10);
        }
        randomPassword += chars.charAt(Math.floor(Math.random() * (chars.length)));
    }

    console.log(randomPassword);
    document.getElementById("password").value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//© 2022 GitHub, Inc.
//Terms
//Privacy
//Security
