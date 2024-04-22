function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulated authentication (replace with actual backend validation)
    if (username === "Itachi" && password === "Naruto123") {
        alert("Login successful! Here is your flag: FLAG: M4s73rM1n470");
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
