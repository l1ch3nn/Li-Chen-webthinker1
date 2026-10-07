let foods = [
    "pizza",
    "icecream",
    "burger"
];

function setup() {
    createCanvas(600, 400);
    background("yellow");
    for (let i = 0; i < foods.length; i++) {
        text(foods[0]);
    }
}