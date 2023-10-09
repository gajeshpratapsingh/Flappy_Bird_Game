Flappy Bird Game

Overview
This project is an implementation of the classic game "Flappy Bird" using the Phaser game framework. The game involves controlling a bird to navigate through a series of pipes and earn points by passing through the gaps between the pipes.

How to Play
Installation: To play the game, you need a web server to host the HTML file and the game assets. Simply clone this repository and serve it using a local server or upload it to a web hosting platform.

Game Objective: The objective of the game is to fly the bird as far as possible by tapping or clicking to make the bird flap its wings. The bird must navigate through the gaps between the pipes without hitting them or the ground.

Scoring: You earn points for successfully passing through pipe gaps. Your current score and the best score are displayed on the screen.

Game Over: The game ends when the bird collides with a pipe or the ground or goes out of the screen. Your score is recorded, and if it's higher than the previous best score, it becomes the new best score.

Restart: After a game over, you can restart the game by clicking or tapping the screen.

Game Components
Bird: The player controls a bird character that can flap its wings to fly upwards.

Pipes: Pipes are obstacles that the bird must navigate through. They appear at regular intervals with varying heights. Passing through the gap between pipes earns the player points.

Ground: The ground serves as the lower boundary of the game. Colliding with the ground results in a game over.

Code Structure
The game code is structured as follows:

Window onload Function: The game initialization code is wrapped in a window.onload function to ensure it runs when the page is fully loaded.

'Play' State: The game logic is organized within the 'play' state. This state handles asset loading, game element creation, user input, collision detection, scoring, and game over logic.

Helper Functions: Several helper functions are defined to manage score display, bird flapping, pipe creation, and handling game over scenarios.

'Pipe' Constructor: A constructor function Pipe is defined to create pipe objects with specific properties.

Prototype Chain: The prototype chain for 'Pipe' objects is set up, and an update method is defined to manage pipe movement and scoring.

Customization
You can customize the game by making changes to the following:

Assets: Replace the bird, pipe, and ground images with your own graphics. Ensure the image paths in the code match the new asset filenames and locations.

Game Parameters: Adjust game parameters such as bird gravity, speed, and pipe generation intervals to change the game's difficulty.

Dependencies
Phaser: The Phaser game framework is used for creating and managing the game elements.
Credits
This game is inspired by the original Flappy Bird game created by Dong Nguyen.

Author
Gajesh Pratap Singh

Feedback and Contributions
Feedback and contributions to improve the game are welcome. Feel free to create issues or pull requests.

Have Fun Playing!
Enjoy playing the Flappy Bird game! Flap your wings and see how far you can go!
