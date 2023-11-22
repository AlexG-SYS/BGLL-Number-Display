// admin.js
const socket = io('https://bgll-display.netlify.app'); 

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