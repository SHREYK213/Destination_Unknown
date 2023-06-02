var navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetSectionId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

var confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', function () {
    var name = document.getElementById('nameInput').value;
    var destination = document.getElementById('destinationInput').value;
    var numberOfPeople = document.getElementById('peopleInput').value;

    var message = "Booking Details:\n";
    message += "Name: " + name + "\n";
    message += "Destination: " + destination + "\n";
    message += "Number of People: " + numberOfPeople + "\n\n";
    message += "Booking Confirmed!";

    alert(message);
});

var loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function () {
    var email = prompt('Enter your email:');
    if (isValidEmail(email)) {
        alert('Logged in successfully!');
    } else {
        alert('Invalid email format. Please try again.');
    }
});

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}