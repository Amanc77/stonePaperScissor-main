
# Rock Paper Scissors Game

A simple Rock Paper Scissors game built using JavaScript. This version supports both Single Player (against a computer) and Two-Player modes. The game tracks scores for both players and ends after a set number of rounds (5 rounds by default).


![Screenshot from 2024-12-01 01-43-44](https://github.com/user-attachments/assets/eb34c3ce-7882-46da-974f-e3605caa1e5b)




![Screenshot from 2024-12-01 01-44-35](https://github.com/user-attachments/assets/01542b55-b69b-4c4f-b0ce-2eb40b550b8a)




## Features

- Play against the computer (Single Player mode)
- Play for 5 rounds and view results with grading.
- Dynamic button feedback and responsive design.
- Restart the game with a "New Game" button.
- Score tracking
- Game results displayed at the end
- Option to start a new game

## Technologies Used

- HTML
- CSS
- JavaScript (for game logic and interactivity)
- Kestra API (for Single Player mode computer choice)

## How to Play

1. **Start the game:** Click one of the options (Rock, Paper, or Scissors) to make your choice.
2. **Your opponent:** the computer will make its choice.
3. **Rounds:** The game will continue for 5 rounds, with the scores updated after each round.
4. **Game Over:** Once all rounds are completed, the final result will be displayed, showing the winner and scores.
5. **Start a new game:** You can start a new game by clicking the "New Game" button.

Live Demo 🌐
[Play Now](https://amanc77.github.io/stone_Paper_Scissor/)

Repository 📂
[GitHub Repo](https://github.com/Amanc77/stone_Paper_Scissor)


## API Integration

The game fetches the computer's choice using the Kestra API. The computer's move is randomly selected, and the result is then returned to the player.
