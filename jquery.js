

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

$(".LPcolor").draggable({
    revert:true
});


$("#palette").droppable({
    drop: function(event, ui){
        var c =  $(ui.draggable).css("background-color");
        newDiv = document.createElement('div');
        $(newDiv).html(" ");
        $(newDiv).css("background-color", c);
        $(newDiv).addClass("droppedColor");
        $(this).append(newDiv)

        $(newDiv).addClass("droppedColor");
    }
});

$(document).on('click','.droppedColor',function() {
    $(this).closest("div").remove();
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

$("#resetPalette").click(function(){
   $(".droppedColor").remove(); 
});
