<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $recipient = "drajat1097@gmail.com"; // Replace with your email address
  $subject = "New Contact Form Submission";
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $headers = "From: $name <$email>\r\n";
  
  mail($recipient, $subject, $message, $headers);
  
  // Redirect back to the contact form with a success message
  header("Location: index.html?success=true");
  exit;
}
?>