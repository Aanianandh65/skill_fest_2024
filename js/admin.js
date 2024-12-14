// admin.js

// Register student on form submission
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;

    if (!name || !phone || !email || !college) {
        alert("Please fill in all fields!");
        return;
    }

    // Create a student object
    const student = { name, phone, email, college };

    // Retrieve existing students from localStorage
    const existingStudents = JSON.parse(localStorage.getItem("students")) || [];
    existingStudents.push(student);

    // Save updated students list back to localStorage
    localStorage.setItem("students", JSON.stringify(existingStudents));

    alert("Student registered successfully!");
    e.target.reset(); // Reset the form
    displayStudents(); // Refresh the student table
});

// Display all registered students
function displayStudents() {
    const studentTableBody = document.getElementById("student-table-body");
    const students = JSON.parse(localStorage.getItem("students")) || [];

    studentTableBody.innerHTML = ""; // Clear table content

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${student.college}</td>
            <td>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;

        studentTableBody.appendChild(row);
    });

    // Attach delete event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = parseInt(this.dataset.index);
            deleteStudent(index);
        });
    });
}

// Delete a student by index
function deleteStudent(index) {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1); // Remove the student from the array

    // Save the updated array back to localStorage
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student deleted successfully!");
    displayStudents(); // Refresh the student table
}

// Display all student scores
function displayScores() {
    const scoreTableBody = document.getElementById("score-table-body");
    const scores = JSON.parse(localStorage.getItem("studentScores")) || [];

    scoreTableBody.innerHTML = ""; // Clear table content

    scores.forEach((score, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${score.username || "Unknown"}</td>
            <td>${score.score}</td>
        `;

        scoreTableBody.appendChild(row);
    });
}

// Load students and scores on page load
document.addEventListener("DOMContentLoaded", function () {
    displayStudents();
    displayScores();
});
