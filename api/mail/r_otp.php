<?php
include('../db.php');
require "vendor/autoload.php";
//$robo = 'himanshu@shailersolutions.com';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$developmentMode = true;
$mailer = new PHPMailer($developmentMode);

try { 
    $mailer->SMTPDebug = false; /*2;*/    
    $mailer->isSMTP();

    if ($developmentMode) {
    $mailer->SMTPOptions = [
        'ssl'=> [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
        ]
    ];
    }
    
    $mailer->Host = '103.50.160.116';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'email_account@shaildesign.com';
    $mailer->Password = 'Email@123';
    $mailer->SMTPSecure = 'tls';
    $mailer->Port = 587;
  
    $mailer->setFrom('email_account@shaildesign.com', 'Shailers CRM');
    $mailer->addAddress($emp_email, $emp_name);
    $mailer->isHTML(true);
    $mailer->Subject = 'Shailers CRM OTP';
    $mailer->Body = 'Dear Sir/Madam,<br/><br/>Your One Time Password is: <strong>'.$code.'.</strong> Do not share with anyone. Your OTP expires in 10 minutes.<br/><br/>Thanking You<br/><br/><b>Best Regards:</b><br/><b>Shailers CRM Team<b><br/><b>Telephone: +91-7303416041</b><br/><b>Whatsapp: +91-7303416041<b>';
    $mailer->send();
    $mailer->ClearAllRecipients();
    //echo "MAIL HAS BEEN SENT SUCCESSFULLY";

} catch (Exception $e) {
    //echo "EMAIL SENDING FAILED. INFO: " . $mailer->ErrorInfo;
}
?>