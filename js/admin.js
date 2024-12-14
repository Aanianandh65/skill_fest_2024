// admin.js

// Register student on form submission
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Create a new student object
    const student = {
        name: name,
        phone: phone,
        email: email,
        college: college,
        username: username,
        password: password
    };

    // Add student to localStorage
    registerStudent(student);

    // Update the student table
    updateStudentTable();

    // Clear form fields
    document.getElementById("register-form").reset();
    alert("Student registered successfully!");
});

// Function to register a student into localStorage
function registerStudent(student) {
    // Retrieve existing students from localStorage or initialize empty array
    const students = JSON.parse(localStorage.getItem("registeredStudents")) || [];

    // Check if the username already exists
    if (students.some((s) => s.username === student.username)) {
        alert("Username already exists! Please choose a different username.");
        return;
    }

    // Add the new student to the array
    students.push(student);

    // Save updated student list to localStorage
    localStorage.setItem("registeredStudents", JSON.stringify(students));
}

// Function to update the student table from localStorage
function updateStudentTable() {
    const tableBody = document.getElementById("student-table").querySelector("tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    // Retrieve students from localStorage
    const students = JSON.parse(localStorage.getItem("registeredStudents")) || [];

    // Populate table with student data
    students.forEach((student) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${student.college}</td>
            <td>${student.username}</td>
            <td>${student.password}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Redirect to login page
document.getElementById("go-to-login").addEventListener("click", function () {
    window.location.href = "index.html"; // Adjust the path as needed for your project structure
});

// Load student data when admin panel is loaded
document.addEventListener("DOMContentLoaded", updateStudentTable);

// Load and display student scores
function loadScores() {
    const scoresTableBody = document.getElementById("scores-table").querySelector("tbody");
    const scores = JSON.parse(localStorage.getItem("studentScores")) || [];

    scoresTableBody.innerHTML = ""; // Clear previous entries

    // Ensure that scores is an array and it's not empty
    if (Array.isArray(scores) && scores.length > 0) {
        scores.forEach((score) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${score.username}</td>
                <td>${score.score}</td>
            `;
            scoresTableBody.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="2">No scores available</td>`;
        scoresTableBody.appendChild(row);
    }
}


// Call loadScores when the admin panel loads
document.addEventListener("DOMContentLoaded", loadScores);
