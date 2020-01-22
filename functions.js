const youRock = function(name){
    return 'You rock ' + name + '!';
};

const sqaure = function(num) {
    return num * num;
};

const cube = function(num){
    return Math.pow(num,3);
};

const toTheFourth = function(num){
    return Math.pow(num,4);
}

const calculator = function(num1, num2, func){
    if (typeof(num1) !== "number" || typeof(num2) !== "number" ){
        return 'calculator only accepts numbers';
    }
    else if(func === 'add'){
        return num1 + num2;
    }
    else if (func === 'subtract'){
        return num1 - num2;
    }
    else if (func === 'divide'){
        return num1 / num2;
    }
    else if (func === 'multiply'){
        return num1 * num2;
    }
    else {
        return 'calculator can only add, subtract, divide, or multiply';
    }
};


const fizzBuzz = function(num){

    if(num % 3 === 0 && num % 5 ===0){
        return 'FizzBuzz';
    }
    else if(num % 3 === 0){
        return 'Fizz';
    }
    else if(num % 5 === 0){
        return 'Buzz';
    }
    else {
        return num;
    }
};





const rainDrop = function(num){
    let result = "";
    if(num % 3 === 0){
        result = 'Pling';
    }
    if(num % 5 === 0){
        result = result + 'Plang';
    }
    if(num % 7 === 0){
        result = result + 'Plong';
    }

    console.log(result || num);
    
};