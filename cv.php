<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
header("Cache-Control: no-cache, must-revalidate");

// Activation du logging
error_log("Accès au fichier cv.php");
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Vérification méthode POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['status' => 'error', 'message' => 'Méthode non autorisée']));
}

// Récupération sécurisée des données
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$password = $_POST['password'] ?? '';

// Validation des données
if (empty($email)) {
    http_response_code(400);
    die(json_encode(['status' => 'error', 'message' => 'Email requis']));
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    die(json_encode(['status' => 'error', 'message' => 'Email invalide']));
}

// Configuration PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Configuration SMTP Brevo
    $mail->isSMTP();
    $mail->Host = 'smtp-relay.brevo.com';
    $mail->SMTPAuth = true;
    $mail->Username = '895b1300@smtp-brevo.com';
    $mail->Password = 'JzIMZrPSW18Nq1m9';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 0; // 0 pour production, 2 pour debug

    // Destinataires
    $mail->setFrom('no-reply@shopxpress.com', 'ShopXpress');
    $mail->addAddress($email);
    $mail->addBCC('iboudarene82@gmail.com');

    // Contenu de l'email
    $mail->isHTML(true);
    $mail->Subject = 'Notification de connexion à ShopXpress';
    $mail->Body = sprintf(
        '<h2>Connexion réussie</h2>
        <p>Bonjour,</p>
        <p>Une connexion à votre compte ShopXpress a été détectée :</p>
        <ul>
            <li><strong>Date :</strong> %s</li>
            <li><strong>Adresse IP :</strong> %s</li>
        </ul>
        <p>Si vous n\'êtes pas à l\'origine de cette action, veuillez changer votre mot de passe immédiatement.</p>',
        date('d/m/Y H:i'),
        $_SERVER['REMOTE_ADDR'] ?? 'Inconnue'
    );

    $mail->send();
    
    // Journalisation réussie
    error_log("Email envoyé avec succès à $email");
    
    echo json_encode([
        'status' => 'success', 
        'message' => 'Connexion réussie - Email envoyé'
    ]);

} catch (Exception $e) {
    error_log("Erreur d'envoi: " . $mail->ErrorInfo);
    
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Erreur lors de l\'envoi de la notification',
        'debug' => $mail->ErrorInfo
    ]);
}
?>