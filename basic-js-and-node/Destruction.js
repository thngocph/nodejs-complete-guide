const person = {
	name: "Ngoc",
	age: 33,
	greet() {
		console.log(`Hello ${this.name}`);
	}
}

console.log("---Normal print data---");
const printNormalName = (personData) => {
	console.log(person.name);
}
printNormalName(person);

// When you destructre an object, you must you the same property name,
// while you can use any property name when destructuring an array
console.log("---Destructuring an object---");
const printDestructuringName = ({name}) => {
	console.log(name);
}
printDestructuringName(person);

console.log("---Another example of Destructuring an object---");
const {name, age, greet} = person;
console.log(name, age, greet);

console.log("Destructuring an array");
const hobbies = ["Football", "Swimming", true, {name: "Manga"}]
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

// console.log("Copy an array by SLICE");
// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// console.log("\n---------------------");

// console.log("SPREAD operator to copy an ARRAY");
// const copipedArrayBySpread = [...hobbies];
// console.log(copipedArrayBySpread);

// console.log("\n---------------------");
// console.log("SPREAD operator to copy an OBJECT");
// const copiedPerson = {...person};

// console.log("\n---------------------");
// console.log("REST operator: Merge multiple arguments into an array");

// const arr = (...args) => args;
// console.log(arr(1, 2, 3));