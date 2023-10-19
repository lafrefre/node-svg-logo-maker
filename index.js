import inquirer from 'inquirer';
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');


inquirer
.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo',
        validate: (input) => {
            return input.length > 0 && input.length <= 3 ? true : 'Please enter 1 to 3 characters.';
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your shape'
    }
])
.then((answers) => {
    let shape; //variable to hold the shape
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Circle':
            shape = new Circle();
            break;
    }
    // set the color property of the shape 
    shape.setColor(answers.shapeColor);

    //gen the svg string for the loop 
    const svg = svgGen.generateLogo(answers.text, answers.textColor, shape);

    //write the svg string to a file
    filewriter.saveSVGToFile('logo.svg', svg);

    console.log('Generate logo.svg'); //for testing
})
.catch((error) => {
    console.error('An error occurred:', error.message);
});
