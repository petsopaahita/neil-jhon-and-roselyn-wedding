<?php
require_once 'config.php';

if(isset($_POST['first-name'], $_POST['last-name'], $_POST['email'])) {
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $email = $_POST['email'];

    $sql = "INSERT INTO attendees (first_name, last_name, email) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    $stmt->bind_param("sss", $first_name, $last_name, $email);

    if ($stmt->execute()) {
        header("Location: /../neil-jhon-and-roselyn-wedding/thank-you");
        exit();
    } else {
        header("Location: /../neil-jhon-and-roselyn-wedding");
        exit();
    }

    $stmt->close();
} else {
    header("Location: /../neil-jhon-and-roselyn-wedding");
    exit();
}

$conn->close();
?>
