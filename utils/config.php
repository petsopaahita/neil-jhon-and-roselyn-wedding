<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "if0_35870051_neilandroselyn_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>