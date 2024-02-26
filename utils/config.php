<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "if0_35870051_neilandroselyn_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// $servername = "sql305.infinityfree.com";
// $username = "if0_35965669";
// $password = "yU4fMv4ymybDX";
// $dbname = "if0_35965669_neilandroselyn_db";

// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

?>