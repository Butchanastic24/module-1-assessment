//Boiler plate for taking user input
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//ASCII Art for correct answer
let correctPassword = `
_________                                    __         
\_   ___ \  ____   ____   ________________ _/  |_ ______
/    \  \/ /  _ \ /    \ / ___\_  __ \__  \\   __/  ___/
\     \___(  <_> |   |  / /_/  |  | \// __ \|  | \___ \ 
 \______  /\____/|___|  \___  /|__|  (____  |__|/____  >
        \/            \/_____/            \/         \/ 

password is valid!
`
//ASCII Art for inncorrect answer
let inncorrectPassword = `
_________                           
/   _____/ __________________ ___.__.
\_____  \ /  _ \_  __ \_  __ <   |  |
/        (  <_> |  | \/|  | \/\___  |
/_______  /\____/|__|   |__|   / ____|
       \/                     \/     

password is not valid
(Must be 10 characters long, and contain a number, also must be Capatalized at the start)
`
//function to check if the password length is longer than 10 characters
function isLongEnough(password){
    longEnough = true;
    if (password.length >= 10){
        longEnough = true;
    }
    else{
        longEnough = false;
    }
    return longEnough;
}

//Function to check if string has a caps as the first letter
function containsCapAtStart(password){
    hasCap = true;
    firstChar = password.charAt(0)
    if (firstChar.toUpperCase() == firstChar){
        hasCap = true;
    }
    else{
        hasCap = false;
    }
    return hasCap;
}

//Function to check if string contains any spaces
function containsSpaces(password){
    hasSpace = false;
    if (password.includes(" ") == true){
        hasSpace = true;
    }
    else{
        hasSpace = false;
    }
    return hasSpace;
}

//Check if input has a number in it.
//Full honesty had to get this function online not sure what /\d/.test is other than it knows if it has a number
function containsNumber(password){
    hasNumber = false;
    if(/\d/.test(password) == true){
        hasNumber = true;
    }
    else{
        hasNumber = false;
    }
    return hasNumber;
}

//Get user input then checks if valid or not based off above functions
reader.question("Welcome to the password validator, please enter a password: ", function(input){
	password = input;
 
    if(containsCapAtStart(password) == true && containsNumber(password) == true && containsSpaces(password) == false){
        console.log(correctPassword);
    }
    else{
        console.log(inncorrectPassword);
    }

	reader.close()

});
