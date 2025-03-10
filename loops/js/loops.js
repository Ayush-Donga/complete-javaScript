// JavaScript Loops

// 1. for loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// 2. while loop
console.log("\nWhile loop:");
let j = 0;
while (j < 3) {
    console.log("While loop iteration: " + j);
    j++;
}

// 3. do...while loop
console.log("\nDo...While loop:");
let k = 0;
do {
    console.log("Do...While loop iteration: " + k);
    k++;
} while (k < 3);

// 4. forEach loop (used with arrays)
console.log("\nforEach loop:");
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function(num, index) {
    console.log(`Index ${index}: Value ${num}`);
});
