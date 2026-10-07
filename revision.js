let foods = [
    "pizza",
    "icecream",
    "burger"
];

function setup() {
    createCanvas(600, 400);
    background("yellow");
    for (let i = 0; i < foods.length; i++) {
        textAlign()
        textSize(36);
        text(foods[0]);
    }
}