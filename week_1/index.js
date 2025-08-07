// 1. variables
const name = "John";
let age = 30;

// 2. ARROW FUNCTIONS
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet(name));

// 3. array and map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubled);

// 4. filter
const filtered = numbers.filter((num) => num % 2 === 0);
console.log("Filtered numbers:", filtered);

// 5. object destructuring
const person = {
  name: "Alice",
  age: 25,
  location: "Antananarivo"
};
const { name: personName, age: personAge, location: personLocation } = person;
console.log(`Name: ${personName}, Age: ${personAge}, Location: ${personLocation}`);

// 6. Async/await with fetch
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();
