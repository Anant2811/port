// Function to handle message submission
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Show success message
        document.getElementById('response-message').innerText = `Thank you for your message, ${name}!`;
        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        // Show error message
        document.getElementById('response-message').innerText = 'Please fill in all fields.';
        document.getElementById('response-message').style.color = 'red';
    }
}
