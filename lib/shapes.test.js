const {Triangle, Circle, Square} = require('./shapes');

describe('Shape Classes', () => {
    test('Triangle render', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Square render', () => {
        const square = new Square();
        square.setColor('red');
        expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    });

    test('Circle render', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="150" r="100" fill="blue" />');
    })
    
})