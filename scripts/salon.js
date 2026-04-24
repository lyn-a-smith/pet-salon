// 1. Create the salon object literal
const salon = {
    name: "Happy Paws Pet Salon",
    hours: {
        open: "9:00 AM",
        close: "6:00 PM"
    },
    phone: "111-555-1234",
    address: {
        street: "123 Main Street",
        city: "San Diego",
        state: "CA",
        zip: "1234"
    }
};

// 2. Create the display function
function displaySalonInfo() {
    // 3. Concatenate the string 
    const infoText = "Welcome to " + salon.name + "! We are located at " + 
                     salon.address.street + ", " + salon.address.city + ", " + 
                     salon.address.state + " " + salon.address.zip + 
                     ". Our hours of operation are from " + salon.hours.open + 
                     " to " + salon.hours.close + ". You can contact us at " + 
                     salon.phone + ".";

    // Target the container in index.html and insert the <p> tag
    document.getElementById("salon-info-container").innerHTML = "<p>" + infoText + "</p>";
}

// Execute the function
displaySalonInfo();