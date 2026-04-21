// Objects -> Objet Literal
// key-value pairs

let student1 = {
    name: "Fernanda",
    lastname: "Murillo",
    age: 33,
};

console.log(student1);

// 1. Access to a value
console.log(student1.name);

let student2 = {
    name: "Lyn",
    lastname: "Smith",
    age: 22,
};

let student3 = {
    name: "Dashana",
    lastname: "Johnson",
    age: 24,
};

// Adding objects to the array

let studentList = [student1, student2, student3];
console.log(studentList);
console.log(studentList[2].name);

//===========================
// CONCRUCTOR
//===========================
function Student(name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

// create an object with the constructor
let student4 = new Student("Kate", "Frantz", 30);
console.log(student4.name);

// Interpolation
console.log(`Name: ${student4.name}. Lastname: ${student4.lastname}.`);
