// example of the for loop
// for (let index = 0; index <= 10; index++) {

//     console.log(index);
        
//     }




// Write a program to print the marks of a student in an object using for loop

let marks = {
    harry : 98,
    rohan : 70,
    aakash : 7,
}

for (const student in marks) {
   console.log(`${student} : ${marks[student]}`);
}
