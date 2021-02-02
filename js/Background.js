function OnPageLoad(){
    console.log("IN here");
    var background = document.getElementById("background");
    var foreground = document.getElementById("foreground");

    var foreGroundHeight = foreground.offsetHeight;
    console.log("Pog: " + foreGroundHeight);
    background.style.height = foreGroundHeight +"px";
}



window.onload = OnPageLoad;
window.onresize = OnPageLoad;