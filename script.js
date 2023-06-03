// navbar query selector
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

// confirm button for the book section
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

// Send Message button
var sendMessageButton = document.getElementById('sendMessageButton');

sendMessageButton.addEventListener('click', function () {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() === '') {
        alert('Please enter a message.');
    } else {
        var successMessage = document.createElement('p');
        successMessage.textContent = 'Message sent. Thank you for contacting us!';
        successMessage.style.color = 'white';
        successMessage.style.backgroundColor = '#49bcff';
        successMessage.style.padding = '10px';
        successMessage.style.marginTop = '10px';
        var section = document.getElementById('contact');
        section.appendChild(successMessage);
        messageInput.value = '';
    }
});

// login button
var loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function () {
    var targetSection = document.getElementById('signup-login');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});


// Flight price
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

// signup 
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


// safejourney button after signup
safeJourneyButton.addEventListener('click', function () {
    var loginEmail = document.getElementById('loginEmailInput').value;
    var loginPassword = document.getElementById('loginPasswordInput').value;

    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (loginEmail === email && loginPassword === password) {
        console.log("Login successful. Enjoy your safe journey!");
        window.location.href = 'index.html';
    } else {
        console.log("Invalid login credentials. Please try again.");
    }

    document.getElementById('loginEmailInput').value = '';
    document.getElementById('loginPasswordInput').value = '';
});

// Wrap the event listener code in a function and call it immediately
(function () {
    safeJourneyButton.addEventListener('click', safeJourneyHandler);

    function safeJourneyHandler() {
        var loginEmail = document.getElementById('loginEmailInput').value;
        var loginPassword = document.getElementById('loginPasswordInput').value;

        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;

        if (loginEmail === email && loginPassword === password) {
            console.log("Login successful. Enjoy your safe journey!");
            window.location.href = 'index.html';
        } else {
            console.log("Invalid login credentials. Please try again.");
        }

        document.getElementById('loginEmailInput').value = '';
        document.getElementById('loginPasswordInput').value = '';
    }
})();