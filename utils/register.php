<?php

require_once 'config.php';

$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$email = $_POST['email'];

$sql = "INSERT INTO attendees (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";

if (mysqli_query($conn, $sql)) {
  echo "<script>alert('Thank you for confirming!'); window.location.href = '..';</script>" ;
} else {
  echo "<script>alert('Registration Error'); window.location.href = '..';</script>" ;
}

$conn->close();

?>