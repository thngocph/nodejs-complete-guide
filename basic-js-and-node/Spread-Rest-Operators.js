const { argv } = require("process");
const { parseArgs } = require("util");

const person = {
	name: "Ngoc",
	age: 33,
	// First way to define a function in an object
	greet() {
		console.log(`Hello ${this.name}`);
	},
	// Second way to define a function in an object
	chao: function () {
		console.log(`Chao ${this.name}`);
	},
	// Doesn't work: this refer to global context
	bonjour: () => {
		console.log(`Bonjour ${this.name}`);
	}
}

const hobbies = ["Football", "Swimming", true, {name: "Manga"}]

console.log("Copy an array by SLICE");
const copiedArray = hobbies.slice();
console.log(copiedArray);

console.log("\n---------------------");

console.log("SPREAD operator to copy an ARRAY");
const copipedArrayBySpread = [...hobbies];
console.log(copipedArrayBySpread);

console.log("\n---------------------");
console.log("SPREAD operator to copy an OBJECT");
const copiedPerson = {...person};

console.log("\n---------------------");
console.log("REST operator: Merge multiple arguments into an array");

const arr = (...args) => args;
console.log(arr(1, 2, 3));