// print 'you can drive ' or 'you can nto drive ' based on age being greater than 18 using ternary operator

let input = prompt('your age');
let age = parseInt(input);


let message = (age>18) ? 'you can drive' : 'you can not drive'
// let message = (age>18) &&  (age < 61) ? 'you can drive' : 'you can not drive'

console.log(message);
