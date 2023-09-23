const inquirer = require('inquirer') // npm i inquirer
const fs = require('fs') // npm i fs
const Triangle = require('./lib/triangle') //javascript for the shahpes
const Square = require('./lib/square')
const Circle = require('./lib/circle')
const svgGenerator = require('./lib/svg-Generator') // npm i svg-Generator
const filewriter = require('./lib/fileWriter') // npm i filewriter

//the function that will generate the logos
async function generateLogo(){
    try {
        const userInput = await inquirer.prompt([
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
                name: 'Shapecolor',
                message: 'Enter a color for your shape'
            }
        ]);

        let shape;
        switch (userInput.shape) {
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            case 'Circle':
                shape = new Circle();
                break;
            default:
                throw new Error('Invalid shape');
        }

        

    } catch (err) {
        console.log(err);
    }
}
