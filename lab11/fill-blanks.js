// Default values for name and age
let name = "Cyprian"; // Replace with dynamic input if needed
let age = 21;         // Replace with dynamic input if needed

// Ensure the values are valid
if (!name || typeof name !== "string") {
    name = "Unknown";
}
if (!age || typeof age !== "number") {
    age = 0;
}

// Output the message
console.log("Hi, my name is " + name + " and I am " + age + " years old.");