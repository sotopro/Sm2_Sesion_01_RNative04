let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];


// test if fish variable is an array
Array.isArray(fish);

fish.reverse();

console.log(fish)

fish.fill('penguin', 0,2);

console.log(fish)

let fishList = ["piranha", "barracuda", "koi", 'eel'];

fishList.sort();

console.log(fishList)


let numbers = [42,44,12,66,8,4,1,20];

// Function to sort numbers by size
const sortNumbers = (a,b) => a - b;

numbers.sort(sortNumbers);

console.log(numbers)

let shark = ['Great White', 'Tiger', 'hammerhead', 'dogfish', 'coelacanth', 'starfish', 'hammerhead'];

let mammals = ["Whale", "Dolphin"];

// concatenate arrays

let seaAnimals = shark.concat(mammals);

console.log(seaAnimals)

let fishString = fish.join(', ');

console.log(fishString)


console.log(shark.indexOf('hammerhead'));

console.log(shark.lastIndexOf('hammerhead'));

// // regular function
// var example = function() {
//     // code to execute
// }

// // arrow function
// let example = () => {
//     // code to execute
// }


// example();

fish.forEach(individualFish => {
    console.log(individualFish);
})