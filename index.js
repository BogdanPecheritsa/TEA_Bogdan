// Helper function for addition
function add(a, b) {
    return a + b;
}

// Helper function for subtraction
function subtract(a, b) {
    return a - b;
}

// Helper function for multiplication
function multiply(a, b) {
    return a * b;
}

// Helper function for division
function divide(a, b) {
    if (b === 0) {
        console.error("Division by zero is not allowed.");
        return null;
    }
    return a / b;
}

// Helper function to find the maximum value in an array
function findMax(arr) {
    if (arr.length === 0) {
        console.error("Array is empty.");
        return null;
    }
    return Math.max(...arr);
}

// Example usage
let num1 = 10;
let num2 = 5;
let numbers = [3, 5, 7, 2, 9];

console.log("Add:", add(num1, num2));          // 15
console.log("Subtract:", subtract(num1, num2)); // 5
console.log("Multiply:", multiply(num1, num2)); // 50
console.log("Divide:", divide(num1, num2));     // 2
console.log("Max value:", findMax(numbers));    // 9