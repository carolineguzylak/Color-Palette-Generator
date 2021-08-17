

function randomColor(){
    color = "rgb(" + 
    Math.floor(256*Math.random()) + ", " + 
    Math.floor(256*Math.random()) + ", " +
    Math.floor(256*Math.random()) + ")";
    return color;
};

// $("#singleColorBox").draggable();

// $("#palette").droppable({
//     drop: function(event, ui){
//       $(this).css("background-color","#21dd85");
//       $(this).find("p").remove();
//       $("<li></li>").text(ui.draggable.text()).appendTo(this);
//     },
//     accept: ".color"
//   }

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

