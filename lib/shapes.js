//circle defined 
class shape {
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }

    render(){
        
    }
}

class Triangle extends shape {
    render(){
        console.log('Triangle rendered');
    }
}

class Square extends shape {
    render(){
        console.log('Square rendered');
    }
}

class Circle extends shape {
    render(){
        console.log('Circle rendered');
    }
}

module.exports = {
    Triangle,
    Square,
    Circle
};