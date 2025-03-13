// Short Values Ascending And Descending

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ascending
// Using sort() method
// The sort() method sorts the elements of an array in place and returns the sorted array.
let ascending = values.sort((a, b) => a - b);
console.log(ascending);

// Using for loop
// The for loop has three parts: initialization, condition, and final-expression.
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// Descending
// Using sort() method
// The sort() method sorts the elements of an array in place and returns the sorted array.
let descending = values.sort((a, b) => b - a);
console.log(descending);

// Using for loop
// The for loop has three parts: initialization, condition, and final-expression.
for (let i = values.length - 1; i >= 0; i--) {
  console.log(values[i]);
}