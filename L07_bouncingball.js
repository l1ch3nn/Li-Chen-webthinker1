// write your codes here
let xpos;
let ypos;
let colorMe;

function setup() {
createCanvas(600, 600);
background("gray");
rectMode(CENTER);

xpos = 50;
ypos = 50;
colorMe = 0;

for (let count=0; count<7; count++) {
fill(colorMe);
rect(xpos, ypos, 50, 50);
xpos = xpos + 55
ypos = ypos +55;
colorMe = colorMe + 56
}
}