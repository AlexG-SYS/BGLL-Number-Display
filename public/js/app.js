// app.js
const socket = io('https://bgll-display.netlify.app/');

function updateNumbers() {
    const numbers = [
        document.getElementById('numberInput1').value,
        document.getElementById('numberInput2').value,
        document.getElementById('numberInput3').value,
        document.getElementById('numberInput4').value,
        document.getElementById('numberInput5').value,
        document.getElementById('numberInput6').value,
        document.getElementById('numberInput7').value,
        document.getElementById('numberInput8').value
    ];

    // Send the array of numbers to the server
    socket.emit('updateNumbers', numbers);
}

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
