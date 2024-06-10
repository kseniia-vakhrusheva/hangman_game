# Hangman Game

## Overview

This project is a digital implementation of the classic Hangman word-guessing game, developed using modern frontend technologies. The application features an interactive, responsive design and dynamic content generation to ensure an engaging user experience.

## Technologies Used

### HTML & CSS

- **HTML**: The structure of the application is defined using HTML, but the body of the `index.html` file is initially empty. All necessary elements are dynamically generated using JavaScript.
- **CSS**: Custom styles are applied to ensure the game is visually appealing and user-friendly.

### JavaScript

- **Vanilla JavaScript**: The game logic and UI interactions are implemented using plain JavaScript, without any frameworks like Angular, React, or Vue.
- **DOM Manipulation**: Dynamic content generation and user interactions are managed through direct manipulation of the Document Object Model (DOM).
- **Event Handling**: Both virtual (on-screen) and physical (keyboard) inputs are handled using JavaScript event listeners.
- **Game Logic**: The core game logic, including letter guessing, incorrect guess tracking, and end-game conditions, is implemented in JavaScript.

### Tools and Libraries

- **ESLint**: Used for identifying and fixing potential issues in the JavaScript code, ensuring code quality and consistency.
- **Prettier**: Employed for automatic code formatting, maintaining a consistent code style across the project.

### Responsive Design

- **Media Queries**: CSS media queries are used to ensure the game is responsive and works well on different screen sizes, including desktop (1440px+), tablet (768px-1440px), and mobile (360px-768px) devices.
- **Adaptive Layout**: The layout adapts to different screen sizes, ensuring that all game elements are displayed correctly and no content is left out of view.

## Key Features

- **Interactive Gameplay**: Players can guess letters using both virtual and physical keyboards.
- **Randomized Questions**: Each game session presents a new, randomly selected question-answer pair.
- **End Game Modal**: At the end of each game, a modal window displays the outcome and provides an option to play again.

