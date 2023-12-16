function changingFont(fontstyle) {
    console.log(fontstyle.value);
    var outputText = document.getElementById("output-text");
    outputText.className = "text-center " + fontstyle.value;
}

var textarea = document.getElementById('messageSecondaire');
var input = document.getElementById('messagePrincipal');
var displayParagraphInput = document.getElementById('display-text-primaire');
var displayParagraphTextarea = document.getElementById('display-text-secondaire');

textarea.addEventListener('input', function() {
    var enteredText = this.value;
    displayParagraphTextarea.textContent = enteredText;
});

input.addEventListener('input', function() {
    var enteredText = this.value;
    displayParagraphInput.textContent = enteredText;
});

// Add event listeners to input fields for 'À :' and 'De :'
document.getElementById('nomPrenom').addEventListener('input', function() {
    var enteredText = this.value;
    document.getElementById('display-text-to').textContent = "À : " + enteredText;
});

document.getElementById('nomFrom').addEventListener('input', function() {
    var enteredText = this.value;
    document.getElementById('display-text-from').textContent = "De : " + enteredText;
});


document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });
});