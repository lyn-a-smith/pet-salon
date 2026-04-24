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

        // Create the HTML row for each pet
        let row = `
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.breed}</td>
                <td>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        `;

        // Append the row to the table body
        tableBody.innerHTML += row;
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