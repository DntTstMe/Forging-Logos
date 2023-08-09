// Import the 'inquirer' library to prompt the user with questions and receive answers
const inquirer = require('inquirer');
const fs = require('fs').promises; // Import fs module with promises

// Import required shapes and Svg class from './lib/shapes' file
const { Circle, Triangle, Square } = require('./lib/shapes');
// Define Svg class with methods to generate SVG content
class Svg {
    constructor() {
      this.textElement = '';
      this.shapeElement = '';
    }
    render() {
      return `version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"`;
    }
    setText(text, color) {
      this.textElement = ` <text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`;
    }
    setShapeElement(shape) {
      this.shapeElement = shape.render();
    }
  }