// Mapping an array of numbers to an array of their squares
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num ** 2);
assertArraysEqual(squares, [1, 4, 9, 16, 25]);

// Mapping an array of names to an array of their lengths
const names = ["Alice", "Bob", "Charlie", "David"];
const nameLengths = names.map((name) => name.length);
assertArraysEqual(nameLengths, [5, 3, 7, 5]);

// Mapping an array of objects to an array of their properties
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const ages = people.map((person) => person.age);
assertArraysEqual(ages, [25, 30, 35]);
