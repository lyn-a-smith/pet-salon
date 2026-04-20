// 1. Create 3 pet object literals
const pet1 = {
    name: "Spot",
    age: 3,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
};

const pet2 = {
    name: "Chesty",
    age: 2,
    gender: "Male",
    service: "Nail Trim",
    breed: "French Bulldog"
};

const pet3 = {
    name: "Rocky",
    age: 5,
    gender: "Male",
    service: "Bath",
    breed: "Boxer"
};

// 2. Create an array 
const petsList = [pet1, pet2, pet3];

// 3. Create the displayPets function
function displayPets() {
    // Target the HTML element using its 'id' attribute
    const petListElement = document.getElementById("pet-list");

    // Clear any existing content to prevent duplicates if called multiple times
    petListElement.innerHTML = "";

    // Iterate through the petsList array using a for loop
    for (let i = 0; i < petsList.length; i++) {
        // Create a new <li> tag for the current pet
        const listItem = document.createElement("li");
        
        // Assign the pet's name to the text content of the tag
        listItem.textContent = petsList[i].name;

        // Append the <li> tag to the parent <ol> tag
        petListElement.appendChild(listItem);
    }
}

// Execute the function to display the names when the script loads
displayPets();