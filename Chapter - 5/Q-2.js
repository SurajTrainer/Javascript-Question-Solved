// keep adding number to the array in 1 until 0 is added to the array..

let array = [];

let userinput = prompt('enter a number')

let addnum = parseFloat(userinput)

if (!isNaN(addnum)) {
    array.push( addnum)
    console.log('array is', array);
}else if (array  == 0) {
    console.log('finshed');
}else{
    console.log('invalid value');
}