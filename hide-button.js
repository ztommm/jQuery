// Paslēpt, Rādīt pogas
let hideMode= false;

$("#hide-btn").click(function() {
    hideMode = !hideMode;

    if (hideMode){
        $("#content").hide(); 
        $("#hide-btn").html("Parādīt")
        randomTPBtn(); 
    } 
    else{
        $("#content").show();
        $("#hide-btn").html("Paslēpt")
        $("#hide-btn").removeAttr("style");
    } 
});

let eventQueued= false;

$("#hide-btn").mouseenter(function() {
    if (!hideMode || eventQueued) {
        return;
    }
    eventQueued = true;
    setTimeout(randomTPBtn, 250);
});

function randomTPBtn(){
    if (!hideMode) return;
    let rngTop = Math.floor(Math.random() * (window.innerHeight - 100));
    let rngLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    
    $("#hide-btn").css('top', rngTop + "px");
    $("#hide-btn").css('left', rngLeft + "px");

    eventQueued = false;
}