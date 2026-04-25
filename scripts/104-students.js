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

    const row = displayRow(newStudent);

    body.appendChild(row);


    studentForm.reset();
}


function displayRow(newStudent){ 
    const row = document.createElement("tr");

    row.innerHTML = `
    <td> ${newStudent.name} </td> 
    <td> ${newStudent.age} </td> 
    <td> ${newStudent.course} </td>
    <td> <button class="btn btn-danger delete-btn"> Delete </button> </td> 
    `;

    // Delete functionality
    row.querySelector(".delete-btn").addEventListener("click", function (event){
        //console.log(event);
        const confirmation = confirm("Are you sure you want to delete this row?");

        if (confirmation){
            row.remove();
        }
    });

    return row;
}
