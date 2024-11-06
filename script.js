//1

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));

//2

function filter(array, handler) {
    const result = [];
    array.forEach((element) => {
        if (handler(element)) {
            result.push(element);
        }
    });
    return result;
}

const dataList = [1, 2, 3, 4, 5, 6];
const filteredList = filter(dataList, (a) => a % 2);
console.log(filteredList); 

//3

function pow(base, exponent) {
    let result = 1;
    
    if (exponent === 0) {
        return 1; 
    }

    const positiveExponent = exponent > 0 ? exponent : -exponent;

    for (let i = 0; i < positiveExponent; i++) {
        result *= base;
    }

    return exponent > 0 ? result : 1 / result; 
}

console.log(pow(2, 5));   
console.log(pow(5, 0));   
console.log(pow(2, -2));  

//4

function pow1(base, exponent) {
    let result = 1;
    
    if (exponent === 0) {
        return 1;
    }

    const positiveExponent = exponent > 0 ? exponent : -exponent;

    for (let i = 0; i < positiveExponent; i++) {
        result *= base;
    }

    return exponent > 0 ? result : 1 / result;
}

function powList(numbers, exponent) {
    return numbers.map((num) => pow(num, exponent));
}

const dataList1 = [2, 3, 4];
const exponent = 3;
const result = powList(dataList1, exponent);
console.log(result); 

//5

function pow(base, exponent) {
    let result = 1;
    
    if (exponent === 0) {
        return 1;
    }

    const positiveExponent = exponent > 0 ? exponent : -exponent;

    for (let i = 0; i < positiveExponent; i++) {
        result *= base;
    }

    return exponent > 0 ? result : 1 / result;
}

function filter(array, handler) {
    const result = [];
    array.forEach((element) => {
        if (handler(element)) {
            result.push(element);
        }
    });
    return result;
}

function powList(numbers, exponent) {
    return numbers.map((num) => pow(num, exponent));
}

function powAndFilter(numbers, exponent, min) {
    const poweredList = powList(numbers, exponent);
    
    const filteredList = filter(poweredList, (num) => num >= min);
    
    return filteredList;
}


const dataList2 = [2, 3, 4, 5];
const min = 30;
const result1 = powAndFilter(dataList2, exponent, min);
console.log(result1);

//6

function sum(handler) {
    return function calc() {
        const numbers = handler(); 
        return numbers.reduce((acc, num) => acc + num, 0); 
    };
}
function handler() {
    return [8, 5, 1];
}

let calc = sum(handler);
console.log(calc()); 
