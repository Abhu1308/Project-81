canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
color = "blue";
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
color = "black";
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
color = "red";
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
color = "orange";
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
color = "green";
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
