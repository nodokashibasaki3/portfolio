document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');
    form.onsubmit = function(event) {
        event.preventDefault();
        var password = document.getElementById('password').value;
        if (password === "yourpassword") { // Replace with your actual password
            document.querySelector('.login-container').classList.add('hidden');
            document.querySelector('.portfolio-container').classList.remove('hidden');
        } else {
            alert('Incorrect password');
        }
    };
});