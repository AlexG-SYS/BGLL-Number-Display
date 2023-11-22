// app.js
const socket = io('https://bgll-display.netlify.app');

// Listen for updated numbers from the server
socket.on('numbersUpdated', (data) => {
    displayNumbers(data);
});

function displayNumbers(numbers) {
    const numbersList = document.getElementById('numbersList');

    // Clear previous content
    numbersList.innerHTML = '';

    // Display each number in a list item
    numbers.forEach((number, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Number ${index + 1}: ${number}`;
        numbersList.appendChild(listItem);
    });
}
