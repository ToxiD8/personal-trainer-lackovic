<?php
session_start();
header('Content-Type: application/json');

// Get the session status message if set, else empty string
$message = $_SESSION['status'] ?? '';

// Clear the session status after reading it
unset($_SESSION['status']);

// Return JSON response with the message
echo json_encode(['message' => $message]);
