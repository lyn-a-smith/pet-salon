$("#knowMoreButton").click(function(){
    $("#resumeContainer").slideToggle(500);
});

$("#changeModeButton").click(function(){
    // Change the CSS Class
    $("body").toggleClass("dark-mode");
    
    // Change the  title
    const isDark = $("body").hasClass("dark-mode");

    if(isDark){
        $("h1").text("Dark Mode");
    } else {
       $("h1").text("☀️ Light Modee"); 
    }


    // js ternary condition minichallenge
    //$("h1").text(isDark ? "Dark Mode" : "☀️ Light Mode");

    //$("h1").text($("body").hasClass("dark-mode") ? "Dark Mode" : "☀️ Light Mode");
});