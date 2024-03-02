// Create an array of numbers and take input from the user to add number to this array

let array = [];

let userinput = prompt('enter a number')

let arrayadd = parseFloat(userinput);

if (!isNaN(arrayadd)) {
    array.push(arrayadd)
    console.log('the array is',array);
}else{
    console.log('enter a valid number');
}