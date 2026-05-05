// Save Data
$("#saveBtn").click(function (e){
    e.preventDefault();
    // console.log("Save Button Test");

    const username = $("#username").val().trim();

    // Get the current value from the local storage or create the array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the username to the users list
    users.push(username);

    // Save it to local storage
    localStorage.setItem("users", JSON.stringify(users));
});

// Get Data
// Console log the value
$("#getBtn").click(function (e){
    e.preventDefault();

    // Get from local storage
    //const storedUser = localStorage.getItem("username");
    
    const users = JSON.parse(localStorage.getItem("users")) || [];


    console.log(users);

});

// Delete Data
$("#deleteBtn").click(function(){
     localStorage.clear(); // remove everything
    //localStorage.removeItem("username"); // remove one element by key
});