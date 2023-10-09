// This code is wrapped in a window.onload function to ensure it runs when the page is fully loaded.
window.onload = function() {
     // Create a Phaser game instance with a specified size, rendering method, and target div.
     var game = new Phaser.Game('100%', '99%', Phaser.AUTO, 'gameDiv');

     // Define various game parameters
    var bird;
    var birdGravity = 800;
    var birdSpeed = 125;
    var birdFlapPower = 250;
    var birdScale = 0.6;
    var pipeInterval = 2000;
    var pipeHole = 140;
    var pipeGroup;
    var score = 0;
    var scoreText;
    var topScore;
    var ground;
}