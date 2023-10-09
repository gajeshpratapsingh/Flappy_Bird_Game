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

    // Define the 'play' state of the game
    var play = function(game) {}

    // Define functions for preloading, creating, and updating the game state
    play.prototype = {
        preload: function() {
            // Load game assets (bird sprite, pipe image, ground image)
            game.load.spritesheet("bird", "assets/birdsprite.png", 82, 72, 8);
            game.load.image("pipe", "assets/pipe.png");
            game.load.image("ground", "assets/fence.png");
        },
        create: function() {
            // Set the background color
            game.stage.backgroundColor = "#87CEEB";

            // Enable arcade physics
            game.physics.startSystem(Phaser.Physics.ARCADE);

            // Create a group for pipes
            pipeGroup = game.add.group();

            // Initialize score and get the top score from local storage
            score = 0;
            topScore = parseInt(localStorage.getItem("topFlappyScore")) || 0;

            // Create and display the score text
            scoreText = game.add.text(10, 10, "-", {
                font: "bold 16px Arial",
                fill: "#ffffff"
            });
            updateScore();

            // Create the bird sprite and configure it
            bird = game.add.sprite(200, 240, "bird");
            bird.anchor.set(0.5);
            bird.scale.setTo(birdScale, birdScale);
            game.physics.arcade.enable(bird);
            bird.body.gravity.y = birdGravity;

            // Define the flapping animation for the bird
            bird.animations.add("flap", [0, 1, 2], 7, true);

            // Handle bird flap on input (click/tap)
            game.input.onDown.add(flap, this);

            // Calculate the screen width for full-screen mode
            var screenWidth = game.width;

            // Create the first pipe and set up a repeating timer for adding pipes
            game.time.events.loop(pipeInterval, function() {
                addPipe(screenWidth);
            });
            addPipe(screenWidth);

            // Create the ground sprite and configure it
            ground = game.add.sprite(0, game.height - 20, "ground");
            ground.scale.setTo(game.width, 1);
            game.physics.arcade.enable(ground);
            ground.body.immovable = true;
        },
        update: function() {
            // Check for collisions with pipes and ground, and handle bird out-of-bounds
            game.physics.arcade.collide(bird, pipeGroup, die);
            game.physics.arcade.collide(bird, ground, die);
            if (bird.y > game.height) {
                die();
            }
        }
    };
        // Add the 'play' state to the game and start it
        game.state.add("Play", play);
        game.state.start("Play");
        // Function to update the score display
        function updateScore() {
            scoreText.text = "Score: " + score + "\nBest: " + topScore;
        }
    
        // Function to handle bird flap action
        function flap() {
            bird.animations.play("flap");
            bird.body.velocity.y = -birdFlapPower;
        }
            // Function to add pipes to the game
    function addPipe(screenWidth) {
        var pipeHolePosition = game.rnd.between(50, 430 - pipeHole);
        var upperPipe = new Pipe(game, screenWidth, pipeHolePosition - 480, -birdSpeed);
        game.add.existing(upperPipe);
        pipeGroup.add(upperPipe);
        var lowerPipe = new Pipe(game, screenWidth, pipeHolePosition + pipeHole, -birdSpeed);
        game.add.existing(lowerPipe);
        pipeGroup.add(lowerPipe);
    }
    // Function to handle game over scenario
    function die() {
        topScore = Math.max(score, topScore);
        localStorage.setItem("topFlappyScore", topScore);
        game.state.start("Play");
    }
    // Define the 'Pipe' constructor function
    Pipe = function(game, x, y, speed) {
        Phaser.Sprite.call(this, game, x, y, "pipe");
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.velocity.x = speed;
        this.giveScore = true;
    };

    
}