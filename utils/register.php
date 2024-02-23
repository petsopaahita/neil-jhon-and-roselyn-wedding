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
        echo "<script>alert('Thank you for confirming!'); window.location.href = '..?success=1';</script>" ;
        exit();
    } else {
        echo "<script>alert('Registration Error'); window.location.href = '..?error=1';</script>" ;
        exit();
    }

    $stmt->close();
} else {
    echo "<script>alert('Registration Error'); window.location.href = '..?error=1';</script>" ;
    exit();
}

$conn->close();
?>
