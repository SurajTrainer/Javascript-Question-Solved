// Write a javascript program to find whether a number is divisable by 2 and 3.

let num = prompt('enter a number.')

if (num % 2 == 0 && num % 3 == 0) {
    console.log('yes it is divisable');
}else{
console.log('sorry it is not divisable..');
}


// second ex..

function isDivisibleBy2And3(number) {
    return number % 2 === 0 && number % 3 === 0;
}

// Example usage:
const userInput = prompt("Enter a number:");
const number = parseInt(userInput);

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    if (isDivisibleBy2And3(number)) {
        console.log(`${number} is divisible by both 2 and 3.`);
    } else {
        console.log(`${number} is not divisible by both 2 and 3.`);
    }
}
