var navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetSectionId = this.getAttribute('href').substring(1);
        if (targetSectionId === 'signup-login') {
            targetSectionId = 'login';
        }
        var targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

var confirmButton = document.getElementById('confirmButton');
var confirmationMessage = document.getElementById('confirmationMessage');

confirmButton.addEventListener('click', function () {
    var name = document.getElementById('nameInput').value;
    var destination = document.getElementById('destinationInput').value;
    var numberOfPeople = document.getElementById('peopleInput').value;

    var message = "Booking Details:<br>";
    message += "Name: " + name + "<br>";
    message += "Destination: " + destination + "<br>";
    message += "Number of People: " + numberOfPeople + "<br><br>";
    message += "Booking Confirmed!";

    confirmationMessage.innerHTML = message;
});

var loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function () {
    var targetSection = document.getElementById('signup-login');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});



var checkButton = document.getElementById('checkButton');
var flightStatus = document.getElementById('flightStatus');

checkButton.addEventListener('click', function () {
    var startLocation = document.getElementById('startLocationInput').value;
    var destination = document.getElementById('destinationInput').value;

    if (startLocation === ' ' || destination === ' ') {
        flightStatus.innerText = 'Please enter both start location and destination.';
    } else {
        flightStatus.innerText = 'We are currently fully booked for flights.';
    }
});


var signupButton = document.getElementById('signupButton');
var safeJourneyButton = document.getElementById('safeJourneyButton');

signupButton.addEventListener('click', function () {
    var name = document.getElementById('nameInputField').value;
    var number = document.getElementById('numberInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;


    console.log("Signup Details:");
    console.log("Name:", name);
    console.log("Number:", number);
    console.log("Email:", email);
    console.log("Password:", password);


    document.getElementById('nameInputField').value = '';
    document.getElementById('numberInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('passwordInput').value = '';


    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

safeJourneyButton.addEventListener('click', function () {
    var loginEmail = document.getElementById('loginEmailInput').value;
    var loginPassword = document.getElementById('loginPasswordInput').value;

    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (loginEmail === email && loginPassword === password) {
        console.log("Login successful. Enjoy your safe journey!");
    } else {
        console.log("Invalid login credentials. Please try again.");
    }

    document.getElementById('loginEmailInput').value = '';
    document.getElementById('loginPasswordInput').value = '';
});
