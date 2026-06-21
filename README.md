# random-three-in-a-row
# Three-in-a-Row (React)

A React implementation of the Three-in-a-Row puzzle game with sample and random grid modes.

## Features
- Home page with navigation to Sample and Random game modes
- Sample 6x6 grid fetched from the Three-in-a-Row API
- Random 10x10 grid fetched from the Three-in-a-Row API
- Click squares to cycle through colors (grey → blue → white → grey)
- Check button to validate the current puzzle state
- "Show incorrect squares" checkbox to highlight errors
- React Routing between home, sample, and random pages

## Technologies
- React
- Vite
- React Router
- JavaScript
- CSS

## API
- Sample grid: `https://threeinarow-api.onrender.com/threeinarow/sample`
- Random grid: `https://threeinarow-api.onrender.com/threeinarow/random`

## How to Run
```bash
npm install
npm run dev
```
