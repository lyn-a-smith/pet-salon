const pet1 = { name: "Spot", age: 3, gender: "Male", service: "Grooming", breed: "Golden Retriever" };
const pet2 = { name: "Chesty", age: 2, gender: "Male", service: "Nail Trim", breed: "French Bulldog" };
const pet3 = { name: "Rocky", age: 5, gender: "Male", service: "Bath", breed: "Boxer" };

function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

const pet4 = new Pet("Walter", 7, "Mixed", "Male", "Nail Trim");
const pet5 = new Pet("Tato", 4, "Bulldog", "Male", "Bath");
const pet6 = new Pet("Bella", 2, "Poodle", "Female", "Grooming");

const petsList = [pet1, pet2, pet3, pet4, pet5, pet6];

function displayRow() {
    const tableBody = document.getElementById("pet-table-body");
    tableBody.innerHTML = "";

    for (let i = 0; i < petsList.length; i++) {
        let pet = petsList[i];
        let row = document.createElement("tr");

        // Added translation spans to the Delete button
        row.innerHTML = `
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.breed}</td>
            <td>
                <button class="btn btn-danger btn-sm delete-btn">
                    <span class="lang-en">Delete</span>
                    <span class="lang-es">Eliminar</span>
                </button>
            </td>
        `;

        row.querySelector(".delete-btn").addEventListener("click", function (event){
            // Check which language is active for the popup alert
            const isSpanish = document.body.classList.contains('spanish-mode');
            const alertMsg = isSpanish ? 
                "¿Estás seguro de que quieres eliminar a " + pet.name + "?" : 
                "Are you sure you want to delete " + pet.name + "?";

            const confirmation = confirm(alertMsg);

            if (confirmation){
                row.remove(); 
                petsList.splice(i, 1); 
                displayRow(); 
            }
        });

        tableBody.appendChild(row);
    }
}

function registerPet() {
    const nameInput = document.getElementById("petName").value.trim();
    const ageInput = document.getElementById("petAge").value.trim();
    const breedInput = document.getElementById("petBreed").value.trim();
    const genderInput = document.getElementById("petGender").value;
    const serviceInput = document.getElementById("petService").value;

    let isValid = true; 

    $(".form-control, .form-select").css("border-color", "");

    if (nameInput === "") { $("#petName").css("border-color", "red"); isValid = false; } 
    if (ageInput === "") { $("#petAge").css("border-color", "red"); isValid = false; } 
    if (breedInput === "") { $("#petBreed").css("border-color", "red"); isValid = false; } 
    if (genderInput === "Select gender / Seleccione género" || genderInput === "") { $("#petGender").css("border-color", "red"); isValid = false; } 
    if (serviceInput === "Select service / Seleccione servicio" || serviceInput === "") { $("#petService").css("border-color", "red"); isValid = false; }

    if (!isValid) return; 

    const newPet = new Pet(nameInput, ageInput, breedInput, genderInput, serviceInput);
    petsList.push(newPet);
    document.getElementById("petRegistrationForm").reset();
    displayRow();
}

displayRow();

// Function to load custom services from localStorage into the dropdown
function loadCustomServices() {
    // 1. Target the dropdown element
    const serviceDropdown = document.getElementById("petService");

    // 2. Retrieve the services array from localStorage (or default to empty array if none exist)
    const storedServices = JSON.parse(localStorage.getItem("services")) || [];

    // 3. Loop through the array and create a new option for each service
    storedServices.forEach(serviceName => {
        // Create a new <option> element
        const option = document.createElement("option");
        
        // Set both the value and the visible text to the service name
        option.value = serviceName;
        option.textContent = serviceName;
        
        // Append the new option to the dropdown menu
        serviceDropdown.appendChild(option);
    });
}

// Call the function so it runs immediately when the registration page loads
loadCustomServices();