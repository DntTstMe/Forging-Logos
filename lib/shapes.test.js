// Describe block for testing shape rendering
describe('Shape rendering', () => {
    // Test case for rendering a circle
    test('Circle test', () => {
      // Creating a new Circle instance with the color 'blue'
      const circle = new Circle('blue');
      
      // Expecting the rendered output of the circle to match the defined SVG string
      expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  
    // Test case for rendering a triangle
    test('Triangle test', () => {
      // Creating a new Triangle instance with the color 'yellow'
      const triangle = new Triangle('yellow');
      
      // Expecting the rendered output of the triangle to match the defined SVG string
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="yellow" />');
    });
    
    // Test case for rendering a square
    test('Square test', () => {
      // Creating a new Square instance with the color 'red'
      const square = new Square('red');
      
      // Expecting the rendered output of the square to match the defined SVG string
      expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />');
    });
  });