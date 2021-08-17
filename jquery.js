

function randomColor(){
    color = "rgb(" + 
    Math.floor(256*Math.random()) + ", " + 
    Math.floor(256*Math.random()) + ", " +
    Math.floor(256*Math.random()) + ")";
    return color;
};

$("#singleColorBox").draggable({
    revert:true
});

$("#palette").droppable({
    drop: function(event, ui){
        var c =  $(ui.draggable).css("background-color");
        console.log(c);
        // $(this).css("background-color","#21dd85");
        $(this).css("background-color","pink");
        // $("<div></div>").css("background-color", c).appendTo(this);
        // var newDiv = document.createElement('div');
        newDiv = document.createElement('div');
        $(newDiv).html("color");
        $(newDiv).css("background-color", c);
        $(this).append(newDiv)
        // $(newDiv).css("background-color", "green");
    }
});

$("#singleColorButton").click(function(){
    $("#singleColorBox").css("background-color", randomColor());
});

$("#largePaletteButton").click(function(){
    $("#LPcolor1").css("background-color", randomColor());
    $("#LPcolor2").css("background-color", randomColor());
    $("#LPcolor3").css("background-color", randomColor());
    $("#LPcolor4").css("background-color", randomColor());
    $("#LPcolor5").css("background-color", randomColor());
    $("#LPcolor6").css("background-color", randomColor());
    $("#LPcolor7").css("background-color", randomColor());
    $("#LPcolor8").css("background-color", randomColor());
});

