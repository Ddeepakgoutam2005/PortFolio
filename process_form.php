<?php
// Database configuration
$servername = "localhost"; // Replace with your server name
$username = "root";        // Replace with your database username
$password = "";            // Replace with your database password
$dbname = "portfolio"; // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = $conn->real_escape_string(trim($_POST['name']));
    $email_address = $conn->real_escape_string(trim($_POST['email_address']));
    $phone = $conn->real_escape_string(trim($_POST['phone']));
    $message = $conn->real_escape_string(trim($_POST['message']));

    // Prepare the SQL query
    $sql = "INSERT INTO contacts (name, email_address, phone, message) VALUES ('$name', '$email_address', '$phone', '$message')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        echo "Submitted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
