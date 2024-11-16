// Event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Admin login check
    if (username === "admin" && password === "admin123") {
        sessionStorage.setItem("isAdmin", "true"); // Store admin session
        alert("Admin Login Successful");
        window.location.href = "admin.html"; // Redirect to admin panel
        return; // Exit function to prevent further checks
    }

    // Student login validation
    validateLogin(username, password);
});

// Validate student login credentials
function validateLogin(username, password) {
    // Retrieve registered students from localStorage
    const students = JSON.parse(localStorage.getItem("registeredStudents")) || [];

    // Find the student with matching username and password
    const student = students.find(
        (student) => student.username === username && student.password === password
    );

    if (student) {
        // Store the logged-in student's username in sessionStorage
        sessionStorage.setItem("currentStudent", username);
        alert("Login successful!");

        // Redirect to the Terms and Conditions page
        window.location.href = "terms.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Event listener for the "Start Exam" button in terms.html
document.getElementById("start-exam-btn")?.addEventListener("click", function () {
    // After accepting the terms, start the quiz by redirecting to the exam page
    window.location.href = "exam.html";
});
