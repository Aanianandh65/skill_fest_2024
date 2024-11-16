// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
    // Get the current student's username from sessionStorage
    const studentId = sessionStorage.getItem("currentStudent");
    const studentIdElement = document.getElementById("student-id");

    // Display the student's username or 'Guest' if not available
    studentIdElement.textContent = studentId || "Guest";

    // Add a click event listener for the "Start Exam" button
    document.getElementById("start-exam-btn").addEventListener("click", function () {
        console.log("Start Exam button clicked."); // Debug log

        // Redirect to the exam page
        window.location.href = "exam.html"; // Ensure 'exam.html' is in the same directory
    });
});
