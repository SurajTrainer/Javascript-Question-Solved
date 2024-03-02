//  Write a program to print 'try again' until the user enter the correct value;


let correctValue = 23;

let input = prompt('enter a number')

while (true) {
    // input =  prompt('enter a number');
    if (parseInt(input) === correctValue) {
        console.log('you are right');
        break;
    }else{
        console.log('try again');
    }
}
