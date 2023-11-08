$("#ajax-button-all").click(function (e) { 
    $("#ajax-div").load("data/ajax-content.txt")
});

$("#ajax-button-rng").click(function (e) {
    let rng = Math.floor(Math.random() * 2)+1;
    $("#ajax-div").load(`data/ajax-content.txt #p${rng}`);
});