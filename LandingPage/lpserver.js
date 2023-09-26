document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-field");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document
            .getElementById("registration-username")
            .value.trim();
        const email = document
            .getElementById("registration-email")
            .value.trim();

        const password = document
            .getElementById("registration-password")
            .value.trim();

        // Send a POST request to your Express.js server
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server (e.g., show a success message)
                alert(data.message);
                // Clear the input fields
                document.getElementById("registration-username").value = "";
                document.getElementById("registration-email").value = "";
                document.getElementById("registration-password").value = "";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

    const loginForm = document.getElementById("login-field");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        // Send a POST request to check login credentials
        fetch("/login", {
            // Change this to a POST request
            method: "POST", // Specify the HTTP method
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }), // Send the data in the request body
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "Login successful") {
                    alert("Login successful");
                } else {
                    alert("Invalid username or password");
                }
                document.getElementById("login-email").value = "";
                document.getElementById("login-password").value = "";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
