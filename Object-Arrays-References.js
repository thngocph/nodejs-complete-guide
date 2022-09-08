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


person.greet();
person.chao();
person.bonjour();
console.log("---------------------");

// Array can contain different types of variables
const hobbies = ["Football", "Swimming", true, {name: "Manga"}];
for (const hobby of hobbies) {
	console.log(hobby);
}

console.log("---------------------");
console.log("Arrays' methods");
console.log(hobbies.map(hob => "Hobby: " + hob));

console.log("---------------------");
// hobbies.map creates new array. The old array hobbies has not changed
console.log(hobbies)

console.log("---------------------");
/*
 We get no error when editing the hobbies constant.
 Because the reference types (hobbies) only store an address pointing at the place in memory where
 that array is stored. And that pointer (that address) has not changed.
*/
hobbies.push("Programming");
console.log(hobbies);