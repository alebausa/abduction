# Project's name

Abduction

## Description

The purpose of the game is to abduct as many people as possible (not animals, not anything else, just people). People will add points to your score. Animals or dogs will take points off your score (or kill you, if the score is 0). You are automatically dead if the MIB car shows up and you don't put the UFO on hide mode after X time.

## MVP (CANVAS)

The MVP includes the following items graphically represented by colors:

- the scenario (without pictures), including the shapes that will be the buildings
- the moving UFO with the left and right arrow
- the abducting ray with the space bar
- the abducted element should disappear
- the people randomly appearing
- score board
- start screen
- game over screen
- win screen

## Backlog

- Background of the city
- The UFO entering the "hide mode" with the H key
- The enemies randomly appearing
- The MIB car appearing every X time
- Buildings and people graphics
- Sounds and bg music
- Swing effect for the UFO
- Abduction animation
- Second & posterior levels
- Screens style

## Data structure

class UFO {
properties: life, direction
methods: go right, go left, abduct, hide
}

class MIB {
properties: direction
methods: appear, move
}

class People {
properties:
methods: appear, beAbducted, move right, move left
}

class Enemy {
properties: drection/position
methods: appear, beAbducted, move right, move left
}

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen - Instructions and start button
- gameScreen - Game itself
- hideInstructionsScreen - Before the first MIB car appears, instructions to hide
- gameoverScreen - If you have been seen by the police, you die (start again)
- winScreen - If you achieve 10 points, next level (Level completed!)

## Links

### Trello

[Link url](https://trello.com/b/dxSSRyxX/module-1-game)

### Git

URls for the project repo and deploy
[Link Repo](https://github.com/alebausa/abduction)
[Link Deploy](https://alebausa.github.io/abduction/)

### Slides

URls for the project presentation (slides)
[Link Slides.com](https://slides.com/alebausa/abduction#/)
