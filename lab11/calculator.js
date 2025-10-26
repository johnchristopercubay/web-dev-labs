// Function to perform the addition and update the DOM
function addNumbers() {
    // 1. Get input values (as strings)
    const input1 = document.getElementById('num1').value.trim();
    const input2 = document.getElementById('num2').value.trim();
    
    // 2. Convert to numbers and perform calculation
    const number1 = parseFloat(input1);
    const number2 = parseFloat(input2);
    
    // Check if the conversion resulted in valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = "Invalid Input";
        document.getElementById('result').style.color = "red"; // Highlight error
        return;
    }
    
    const sum = number1 + number2;
    
    // 3. Update the result element in the DOM
    document.getElementById('result').innerText = sum;
    document.getElementById('result').style.color = "#4CAF50"; // Reset to success color
}

// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    if (addButton) {
        addButton.addEventListener('click', addNumbers);
    } else {
        console.warn("Add button not found in the DOM.");
    }
});