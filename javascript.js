let generatedCode = '';

// Generate a random referral code
function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    generatedCode = '';
    for (let i = 0; i < 8; i++) {
        generatedCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('referralCode').textContent = generatedCode;
    document.getElementById('copyButton').disabled = false;

    // Show the referral code with animation
    document.getElementById('referralCode').classList.add('show');
}

// Copy the generated code to the clipboard
function copyCode() {
    if (generatedCode) {
        navigator.clipboard.writeText(generatedCode).then(() => {
            showSnackbar('Code copied to clipboard!');
            showWhatsAppLink(generatedCode); // Show the WhatsApp instruction after copying
        });
    }
}

// Function to display WhatsApp instruction
function showWhatsAppLink(code) {
    const instructionElement = document.getElementById('whatsappInstruction');
    instructionElement.innerHTML = `
        <p>Send this code via WhatsApp:</p>
        <a href="https://wa.me/?text=Here%20is%20my%20referral%20code:%20${code}" target="_blank">
            <button class="button"><i class="fas fa-whatsapp"></i> Share on WhatsApp</button>
        </a>
    `;
    instructionElement.style.display = 'block';
    instructionElement.classList.add('show');
}

// Function to display the snackbar with a custom message
function showSnackbar(message) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.className = 'show';
    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}
