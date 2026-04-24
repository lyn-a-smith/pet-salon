// Identify the form
const productForm = document.querySelector("form");

// Define the constructor
function Product(name, price, category){
    this.name = name;
    this.price = price;
    this.category = category;
}

function saveProduct(event){
    event.preventDefault(); //avoid the refresh

    // Test button and function connection
    // alert("Connected");

    // 1. Get the input values
    const name = productForm.elements["productName"].value;
    const price = productForm.elements["productPrice"].value;
    const category = productForm.elements["productCategory"].value;

    // Test the values
    console.log(` ${name}, ${price}, ${category}`);

    // Validate if name, price, and category is not empty
    if (name === "" || price === "" || category === ""){
        alert("Please fill all the fields");
        return;
    }

    // 2. Use the values
    let newProduct = new Product(name, price, category);
    console.log(newProduct);
    
    displayCard(newProduct);

    // ordered list example
    // let listItem = document.createElement("li");
    // listItem.textContent = newProduct.name;
    // productList.appendChild(listItem);

    // let listItem2 = document.createElement("li");
    // listItem2.textContent = newProduct.price;
    // productList.appendChild(listItem2);

    // JS clear form
    productForm.reset();
}

function displayCard(newProduct){
    // Create the reference to the div#productList
    const container = document.getElementById("productsList");

    // Create the reference to the div ProductList
    container.innerHTML += `
        <div class="card" style="width: 18rem;">
         <div class="card-body">
             <h5 class="card-title">${newProduct.name}</h5>
             <h6 class="card-subtitle mb-2 text-body-secondary">${newProduct.category}</h6>
             <p class="card-text">$${newProduct.price}</p>
            </div>
        </div>
    `;
}




