// JSON Practice//
// Object Literal
const person = {
    name: "Fernanda",
    lastname: "Murillo",
    age: 33,
};

// JSON
let person1 = `{
    "name": "Fernanda",
    "age": 33,
    "isStudent": false
}`;

console.log("this is JSON as a String");
console.log(person1);

// Convert JSON - JS Object
// Parse -> JSON.parse()
let personObject = JSON.parse(person1);
console.log(personObject);

personObject.age = 35


// Convert object to JSON
// stringify JSON.stringify();

let newJSON = JSON.stringify (personObject);
console.log(newJSON);