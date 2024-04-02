// Create an array of image sources
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// Generate a random index between 0 and the length of the array
var randomIndex1 = Math.floor(Math.random() * images.length);

// Get the image source at the random index
var randomImage1 = images[randomIndex1];

// Display the image in an HTML element
document.querySelector(".img1").src = randomImage1;

// Create an array of image sources
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// Generate a random index between 0 and the length of the array
var randomIndex2 = Math.floor(Math.random() * images.length);

// Get the image source at the random index
var randomImage2 = images[randomIndex2];

// Display the image in an HTML element
document.querySelector(".img2").src = randomImage2;

if (randomImage1 === randomImage2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomImage1 > randomImage2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomImage1 < randomImage2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}