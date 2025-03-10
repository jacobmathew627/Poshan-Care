const firebaseConfig = {
    apiKey: "AIzaSyB4NVp9n4a8YITfMTxeZGrPoUUUYIpbB4g",
    authDomain: "poshcare-8bb0d.firebaseapp.com",
    databaseURL: "https://poshcare-8bb0d-default-rtdb.firebaseio.com",
    projectId: "poshcare-8bb0d",
    storageBucket: "poshcare-8bb0d.firebasestorage.app",
    messagingSenderId: "508345992668",
    appId: "1:508345992668:web:5c60bbea8cc4d7afe53b19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
var contactFormDB = firebase.database().ref('contactForm');

// Add event listener for contact form
document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get form values
    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');

    // Save the form data to Firebase
    saveMessages(name, email, message);

    // Display success message
    document.querySelector('.alert').style.display = "block";

    // Hide success message after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById('contactForm').reset();
}

const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        message: message
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};