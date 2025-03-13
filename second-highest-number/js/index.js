const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let highest = 0;
let secondHighest = 0;

for(let num of numbers) {
  if(num > highest) {
    secondHighest = highest;
    highest = num;
  } else if(num > secondHighest) {
    secondHighest = num;
  }
}

console.log('secondHighest', secondHighest);