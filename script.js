// Validation for empty message or invalid shift value
function validateAndEncrypt() {
    clearErrors();
    
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);

    if (!message) {
        document.getElementById('message-error').textContent = "Please enter a message.";
        return;
    }

    if (shift < 1 || shift > 25 || isNaN(shift)) {
        document.getElementById('shift-error').textContent = "Please enter a valid shift value between 1 and 25.";
        return;
    }

    encryptText(); // Proceed to encrypt if validation passes
}

function validateAndDecrypt() {
    clearErrors();
    
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);

    if (!message) {
        document.getElementById('message-error').textContent = "Please enter a message.";
        return;
    }

    if (shift < 1 || shift > 25 || isNaN(shift)) {
        document.getElementById('shift-error').textContent = "Please enter a valid shift value between 1 and 25.";
        return;
    }

    decryptText(); // Proceed to decrypt if validation passes
}

// Clears previous error messages
function clearErrors() {
    document.getElementById('message-error').textContent = "";
    document.getElementById('shift-error').textContent = "";
}

function encryptText() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            result += message[i];
        }
    }

    document.getElementById('result').value = result;
}

function decryptText() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            result += message[i];
        }
    }

    document.getElementById('result').value = result;
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
	// Opens the specified tab
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the current tab
    document.getElementById(tabName).style.display = "block";

    // Optional: Add "active" class to the clicked tab button
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

// Closes the specified tab
function closeTab(tabName) {
    document.getElementById(tabName).style.display = "none";
}
