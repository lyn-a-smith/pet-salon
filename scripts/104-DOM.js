function changeTitle(){

    // 1 Change the title(H1)
    // Get the HTML element with id="title"
    let title = document.getElementById("title");

    // CHange text inside the title
    // innerHTML ot textContent
    title.innerHTML = "<i> Hellow, Cohort 67! </i>";

    // Change paragraphs tect color
    let paragraphs = document.getElementsByClassName("text");

    // ASke Google: JS change text color
    // JS hide or show element element.style.display = "none"  OR "block, inline, flex"
    paragraphs[0].style.color = "blue";
    paragraphs[1].style.color = "none";
}

function addItem(){
    // console.log(addItem);
    const item = document.getElementById("item").value;

    let listItem = document.createElement("li");
    listItem.textContent = item;

    let list = document.getElementById("list");

    if (!item){
        alert("There is not item!");
        return;
    }

    list.appendChild(listItem);

    // clear input 
    document.getElementById("item").value = "";
}