function OnPageLoad(){
    var background = document.getElementById("background");
    var foreground = document.getElementById("foreground");

    var foreGroundHeight = foreground.offsetHeight;
    background.style.height = foreGroundHeight +"px";
}

function ScrollAnim(){
    console.log("Here");
    var pageTop = document.body.scrollTop;
    var pageBottom = pageTop + window.innerHeight;
    var tags = document.getElementsByClassName("tag");

    for(var i = 0; i < tags.length; i++){
        var tag = tags[i];
        const rect = tag.getBoundingClientRect();
        
        if(rect.top < pageBottom * .80){
            tag.classList.add("visible");
        }else{
            tag.classList.remove("visible");
        }
    }
}

function AddScrollAnimation(){
    var tags = document.getElementsByClassName("tag");

    for(var i = 0; i < tags.length; i++){
        var tag = tags[i];
        tag.style.transition = "all 1s";
    }

    var html = document.documentElement;
    html.style.scrollBehavior = "smooth";
}

document.addEventListener('scroll', ScrollAnim);


window.onload = OnPageLoad;
window.onresize = OnPageLoad;
window.onload = AddScrollAnimation;