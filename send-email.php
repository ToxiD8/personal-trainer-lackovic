<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

if (isset($_POST['submitContact'])) {

    $captcha = $_POST['g-recaptcha-response'] ?? '';
    $secretKey = 'YOUR_SECRET_KEY'; // Replace with your actual secret key
    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$captcha}");
    $responseData = json_decode($verifyResponse, true);

    if (!$responseData["success"]) {
        $_SESSION['status'] = "CAPTCHA overenie zlyhalo. Skúste to prosím znova.";
        http_response_code(400);
        exit;
    }

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';

    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER; // Enable for debugging
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = 'smtp.gmail.com';
        $mail->Username = '';
        $mail->Password = '';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        //Recipients
        $mail->setFrom('');
        $mail->addAddress('');
        $mail->addReplyTo($email, $name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'Nová správa: Simona Lackovičová';
        $mail->Body = '<h3>Nová správa od:</h3>
            <h4>Meno: ' . htmlspecialchars($name) . '</h4>
            <h4>Email: ' . htmlspecialchars($email) . '</h4>
            <h4>Správa: ' . nl2br(htmlspecialchars($message)) . '</h4>';

        if (!$mail->send()) {
            $_SESSION['status'] = "Správu sa nepodarilo odoslať. Skúste to neskôr prosím. {$mail->ErrorInfo}";
            http_response_code(500);
        } else {
            $_SESSION['status'] = "Správa bola úspešne odoslaná!";
            http_response_code(200);
        }
    } catch (Exception $e) {
        $_SESSION['status'] = "Správu sa nepodarilo odoslať. Chyba: {$mail->ErrorInfo}";
        http_response_code(500);
    }

    exit;
} else {
    // if accessed without POST submit
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}
