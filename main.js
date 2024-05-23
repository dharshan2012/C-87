canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use  function to begin a path.
    Then, use  to set the color to "grey".
    Use  and set the width to 1.
    Use  to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

/*
    Use  function to begin a path.
    Then, use  to set the color to "blue".
    Use  and set the width to 5.
    Use  to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and  endAngle.
*/

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();



// Similarly, create a  circle with position 350 and 210

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// Similarly, create a  circle with position 210 and 40

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

// Similarly, create an  circle with position 300 and 250

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

// Similarly, create a  circle with position 400 and 250

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
