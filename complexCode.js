// Filename: complexCode.js
// Description: This code generates a fractal pattern using the Chaos Game algorithm.

// Canvas setup
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const width = 800;
const height = 800;
canvas.width = width;
canvas.height = height;

const vertices = [
  { x: width / 2, y: 0 },
  { x: width, y: height },
  { x: 0, y: height },
];

const numPoints = 10000;
let currentPoint = { x: Math.random() * width, y: Math.random() * height };

// Iterate through all the points
for (let i = 0; i < numPoints; i++) {
  let randomVertex = Math.floor(Math.random() * 3); // Select a random vertex
  let chosenVertex = vertices[randomVertex]; // Get the coordinates of the chosen vertex

  // Calculate the mid-point between the current point and the chosen vertex
  let midPoint = {
    x: (currentPoint.x + chosenVertex.x) / 2,
    y: (currentPoint.y + chosenVertex.y) / 2,
  };

  // Update the current point to be the mid-point
  currentPoint = midPoint;

  // Set the color of the pixel
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  // Draw the pixel
  drawPixel(currentPoint.x, currentPoint.y, r, g, b);
}

// Draw a pixel at the given coordinates with the given color
function drawPixel(x, y, r, g, b) {
  context.fillStyle = `rgb(${r}, ${g}, ${b})`;
  context.fillRect(x, y, 1, 1);
}