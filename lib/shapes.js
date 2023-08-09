// Base class for shapes
class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
  // Placeholder method for rendering shapes
  render() {
    throw new Error('Not implemented');
  }
}
// Subclass for rendering circles
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
// Subclass for rendering triangles
class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}
// Subclass for rendering squares
class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}
// Exporting the shape subclasses
module.exports = {
  Circle,
  Triangle,
  Square
};

