const person = { name: "Alice", age: 25, country: "USA" };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

// Renaming variables
const { name: userName, age: userAge } = person;
console.log(userName); // Output: Alice
console.log(userAge); // Output: 25

// Default values
const { gender = "female" } = person;
console.log(gender); // Output: female
