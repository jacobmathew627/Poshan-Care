const firebaseConfig = {
    apiKey: "AIzaSyB4NVp9n4a8YITfMTxeZGrPoUUUYIpbB4g",
    authDomain: "poshcare-8bb0d.firebaseapp.com",
    databaseURL: "https://poshcare-8bb0d-default-rtdb.firebaseio.com",
    projectId: "poshcare-8bb0d",
    storageBucket: "poshcare-8bb0d.firebasestorage.app",
    messagingSenderId: "508345992668",
    appId: "1:508345992668:web:5c60bbea8cc4d7afe53b19"
  };

firebase.initializeApp(firebaseConfig);

var donateFormDB = firebase.database().ref('donateForm')

document.getElementById('donateForm').addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementByVal('name');
    var emailid = getElementByVal('email');
    var amount = getElementByVal('amount');

    saveMessages1(name, emailid, amount);

    document.querySelector('.alert').style.display = "block";
    
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    document.getElementById('donateForm').reset();
}

const saveMessages1 = (name, emailid, amount) => {
    var newdonateForm = donateFormDB.push();
    newdonateForm.set({
        name: name,
        emailid: emailid,
        amount: amount
    });
}

const getElementByVal = (id) => {
    return document.getElementById(id).value;
};