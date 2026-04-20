let names = ["Dashana", "Lyn", "Fernanda"];

// 1. Accessing the values -> by index/position
console.log(names[2]);

// 2. Modifying values -> assign
names[2] = "Fernanda M.";
console.log(names[2]);

// 3. Adding values to the end
names.push("Walter");
console.log(names);

// 4. Adding values to the beginning -> unshift
names.unshift("Tato");
console.log(names);

// 5. Removing the last value -> pop
names.pop();
console.log(names);

// 6. Removing the ifrst value -> shift
names.shift();
console.log(names);

// 7. number of elements in array -> Legnth
console.log(names.length);

function displayNames(){
    let list = document.getElementById("list");

    for(let i=0; i < names.length; i++) {
    let li = document.createElement("li");
    li.textContent = names[i];
    list.appendChild(li);
    }
}

displayNames();




// Exercise 1: Favorite Movies
let favMovies = ["Lion King", "Toy Story", "Jungle Book", "Shrek", "Alladin"];

// 1. Print the full array
console.log(favMovies);

// 2. Print the first and last movie
console.log(favMovies[0]);
console.log(favMovies[4]);

// 3. Replace the 3rd movie with a new one
favMovies[2] = "Up";

// 4. Add a movie to the beginning and end
favMovies.unshift("Bambi");
favMovies.push("Dumbo");

// 5. Remove the last movie
favMovies.pop();

// 6. Print the updated list
console.log(favMovies);