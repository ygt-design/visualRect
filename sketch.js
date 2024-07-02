/* eslint-disable no-undef */

let previousMouseX = 0;
let previousMouseY = 0;
let previousMouseTime = 0;
let rectangles = [1, 1, 1, 1, 1];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  rectMode(CENTER);
  // make the rectangle size according to the mouse speed
  let speed = calculateMouseSpeed();
  let size = map(speed, 0, 0.25, 10, 20);
  // fill(size, 120, 120);
  // stroke(255);
  // rect(mouseX, mouseY, size, size);
  // store the rectangles
  rectangles.push({ x: mouseX, y: mouseY, size: size });
  // draw the rectangles
  for (let i = 0; i < rectangles.length; i++) {
    let rectangle = rectangles[i];
    // stroke(rectangle.size, 120, 120);
    stroke(0);
    strokeWeight(1);
    rect(rectangle.x, rectangle.y, rectangle.size, rectangle.size);
  }
  // if the array has more than 10 rectangles remove the first one and keep the number of rectangles to 10
  if (rectangles.length > 10) {
    rectangles.shift();
  }
}

function calculateMouseSpeed() {
  let currentMouseX = mouseX;
  let currentMouseY = mouseY;
  let currentMouseTime = millis();
  let distance = dist(
    currentMouseX,
    currentMouseY,
    previousMouseX,
    previousMouseY
  );
  let time = currentMouseTime - previousMouseTime;
  let speed = distance / time;
  previousMouseX = currentMouseX;
  previousMouseY = currentMouseY;
  previousMouseTime = currentMouseTime;
  return speed;
}
