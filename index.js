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
  // Questions for the inquirer prompt
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Please enter 3 characters for your logo:',
      //validate to make sure a max of 3 characters are entered
      validate: nameInput => {
          if (nameInput.length === 0) {
          return 'Please enter at least 1 character.';
          }
          if (nameInput.length > 3) {
          return 'Please enter no more than 3 characters.';
          }
          return true; // Return true for a valid input
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter a color name or hexidecimal number for your logo text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like for your logo?',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter a color for your logo shape with a color name or hexidecimal number:',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a color for your logo shape with a color name or hexidecimal number:');
            return false;
          }
        }
    },
  ];
  // Map the shape names to their corresponding constructors
const shapeMap = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
  };
  // Function to write SVG content to a file
  async function writeToFile(fileName, data) {
    const folderPath = './examples/';
    const svg = new Svg();
    svg.setText(data.text, data.textColor);
  
    // Get the constructor for the selected shape from shapeMap
    const ShapeConstructor = shapeMap[data.shape];
    if (!ShapeConstructor) {
      console.error(`Invalid shape selected: ${data.shape}`);
      return;
    }
    // Create a new shape and set it as the shapeElement in the Svg instance
    svg.setShapeElement(new ShapeConstructor(data.shapeColor));
    const svgContent = `<svg ${svg.render()}>${svg.shapeElement}${svg.textElement}</svg>`;