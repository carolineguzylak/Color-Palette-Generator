

function randomColor(){
    color = "rgb(" + 
    Math.floor(256*Math.random()) + ", " + 
    Math.floor(256*Math.random()) + ", " +
    Math.floor(256*Math.random()) + ")";
    return color;
};

$("#singleColorButton").click(function(){
    $("#singleColorBox").css("background-color", randomColor());
});