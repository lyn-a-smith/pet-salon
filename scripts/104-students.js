const studentForm = document.querySelector("form");

function Student(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
}

function saveStudent(event){
    event.preventDefault();
    
    const name = studentForm.elements["studentName"].value;
    const age = studentForm.elements["studentAge"].value;
    const course = studentForm.elements["studentCourse"].value;
    
    let newStudent = new Student(name, age, course);
    console.log(newStudent);

    const body = document.getElementById("body");

    const row = document.createElement("tr");
    row.innerHTML = `
    <td> ${newStudent.name} </td> 
    <td> ${newStudent.age} </td> 
    <td> ${newStudent.course} </td> 
    `;
    body.appendChild(row);


    studentForm.reset();
}

