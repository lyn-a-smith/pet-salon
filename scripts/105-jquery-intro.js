
// Selector then Action
$("#triggerEventButton").click(function(){
    alert("Hey!");
});

$("#hideButton").click(function(){
    $("p").hide();
});

$("#showButton").click(function(){
    $("p").show();
});

$("#toggleButton").click(function(){
    $("p").toggle();
    // slideToggle
});

$("#changeTextButton").click(function(){
    $("p").text("This is the new text!");
    // textContent -> text
    // innerHTML -> html
});

$("#addCSSButton").click(function(){
    $("p")
        .css("color", "red")
        .css("padding", "10px")
        .css("background-color", "#c7a9a9");
});

$("#applyCSSClassButton").click(function(){
    $("p").addClass("my-class");
});




