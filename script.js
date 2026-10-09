

// let age  = 25;

// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age >= 18 && age < 65) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior citizen.");
// }

// let arr = [1, 2, 3, 4, 5];

// let result = arr.concat([arr]);

// console.log(result);

// let result = arr.map((x) => x * 2);

// console.log(result);
let arr = [1, 3, 5, 6, 7, 8, 8, 8, 8, 4, 6, 3, 5, 9, 0,];

let result = arr.reduce((accumulator, value) => {
return accumulator += value;
}, 0);

console.log(result); 
