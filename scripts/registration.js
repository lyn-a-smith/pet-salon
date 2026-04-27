// Existing pet1, pet2, pet3 object literals...
const pet1 = { name: "Spot", age: 3, gender: "Male", service: "Grooming", breed: "Golden Retriever" };
const pet2 = { name: "Chesty", age: 2, gender: "Male", service: "Nail Trim", breed: "French Bulldog" };
const pet3 = { name: "Rocky", age: 5, gender: "Male", service: "Bath", breed: "Boxer" };

// 1. Create the Object Constructor
function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

// 2. Create 3 pets using the constructor
const pet4 = new Pet("Walter", 7, "Mixed", "Male", "Nail Trim");
const pet5 = new Pet("Tato", 4, "Bulldog", "Male", "Bath");
const pet6 = new Pet("Bella", 2, "Poodle", "Female", "Grooming");

// 3. Update the array to include the new constructor objects
const petsList = [pet1, pet2, pet3, pet4, pet5, pet6];

// 4. Function to display pets in the table
function displayRow() {
    const tableBody = document.getElementById("pet-table-body");
    
    // Clear the current table content to prevent duplicates
    tableBody.innerHTML = "";

    // Loop through the petsList array
    for (let i = 0; i < petsList.length; i++) {
        let pet = petsList[i];

        // Create an actual HTML element instead of a text string
        let row = document.createElement("tr");

        // Add the columns and the button inside the element
        row.innerHTML = `
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.breed}</td>
            <td>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        `;

        // Add the delete functionality to this specific row
        row.querySelector(".delete-btn").addEventListener("click", function (event){
            // Added the pet's name to the confirmation for a better user experience!
            const confirmation = confirm("Are you sure you want to delete " + pet.name + "?");

            if (confirmation){
                // Remove the row from the screen
                row.remove(); 
                
                // Remove the pet from the underlying data array
                petsList.splice(i, 1); 
                
                // Redraw the table so the index numbers in the loop stay accurate
                displayRow(); 
            }
        });

        // Append the completed row to the table body
        tableBody.appendChild(row);
    }
}

// 5. Function to register a new pet from the form
function registerPet() {
    // Get the values from the HTML inputs
    const nameInput = document.getElementById("petName").value;
    const ageInput = document.getElementById("petAge").value;
    const breedInput = document.getElementById("petBreed").value;
    const genderInput = document.getElementById("petGender").value;
    const serviceInput = document.getElementById("petService").value;

    // Validate inputs (Optional but recommended to prevent empty submissions)
    if(nameInput === "" || ageInput === "") {
        alert("Please fill out the required fields!");
        return; 
    }

    // Create a new Pet object
    const newPet = new Pet(nameInput, ageInput, breedInput, genderInput, serviceInput);

    // Add the new pet to our array
    petsList.push(newPet);

    // Reset the form
    document.getElementById("petRegistrationForm").reset();

    // Update the table to show the new pet
    displayRow();
}

// 6. Call the function to display the initial pets when the page loads
displayRow();