# Tic Tac Toe


This is a Tic Tac Toe web application, built as a project for General Assembly's Web Development Immersive.

Technologies used: HTML, CSS, JavaScript, jquery. AJAX is used for the communication with the back-end.


# URL

https://natasapeic.github.io/tic-tac-toe-game/


# Wireframe

http://imgur.com/SpgvwFO


# User stories

As a user, I want to sign up and play the game.
As a user I want to change my password.
As I user I want to know if and when I won.
As a user I want to sign out.

# Approach

```

- HTML/CSS layout was created
- Forms that were succesfully communicating with API when a user sign in, sign up and sign out were created.
- Game logic implemented along with RESET GAME button
- jQuery element manipulation
- Play a game (create -- "POST") button was created
- Show a game (show -- "GET") was created. Using console.log our current game is shown.
- Update a game (update -- "PATACH") was created. Using console.log we can access to our current game at each state.

```

# Unsolved problems

I was able to retreive the game state at each move ("PATCH"), but not loading current state once user signs out. 
