// -Write a javascript program to store name,phone number, and marks of a  student using objects

let student = {
    name : '',
    phoneNnumber : '',
    mark : ''
   }

   function inputValue() {
    student.name = prompt('enter your  name')
    student.phoneNumber = prompt('enter your  phoneNumber')
    student.mark = parseFloat(prompt('enter your  mark'))
   }
   function displayData() {
    console.log('student',student);
    console.log('student name : ',student.name);
    console.log('student phoneNumber : ',student.phoneNumber);
    console.log('student mark : ',student.mark);
   }
   inputValue()
   displayData()