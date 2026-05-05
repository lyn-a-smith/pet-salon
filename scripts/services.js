// 1. Create the Service Constructor
function Service(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

// 2. Create an array to hold the service objects
const servicesList = [];

// 3. Handle the form submission
$("#servicesForm").submit(function(event){
    // Prevent the default form submission which refreshes the page
    event.preventDefault();

    // Get the values of the inputs 
    // (Note: .trim() needs parentheses to run as a function)
    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = $("#servicePrice").val().trim();

    /////////////////////////////////////////////////////////////////////
    // Get the current value from the local storage or create the array
    let services = JSON.parse(localStorage.getItem("services")) || [];
    // Add the username to the users list
    services.push(name);
    // Save it to local storage
    localStorage.setItem("services", JSON.stringify(services));
    ///////////////////////////////////////////////////////////////////

    

    let isValid = true;

    // Reset borders to default before validating
    $(".form-control").css("border-color", "");

    // Validate if the values are not empty
    if (name === "") {
        $("#serviceName").css("border-color", "red");
        isValid = false;
    } 
    if (description === "") {
        $("#serviceDescription").css("border-color", "red");
        isValid = false;
    } 
    if (price === "") {
        $("#servicePrice").css("border-color", "red");
        isValid = false;
    }

    // Stop the function if validation fails
    if (!isValid) {
        return; 
    }

    // 4. Create a new service object using the constructor
    const newService = new Service(name, description, price);

    // Add the new service to our array
    servicesList.push(newService);

    // Log to the console so you can see it working!
    console.log("New Service Created:", newService);
    console.log("All Registered Services:", servicesList);

    // Reset the form after a successful submission
    this.reset();
});