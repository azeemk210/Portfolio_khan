<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Validate email
  $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
  if (!$email) {
    // Handle invalid email address
    header("Location: index.html?success=false&error=invalid_email");
    exit;
  }

  // Check if required fields are empty
  if (empty($_POST["name"]) || empty($_POST["message"])) {
    // Handle empty fields
    header("Location: index.html?success=false&error=empty_fields");
    exit;
  }

  $recipient = "khan.azeemak@gmail.com"; // Replace with your email address
  $subject = "New Contact Form Submission";
  $name = $_POST["name"];
  $message = $_POST["message"];
  
  $headers = "From: $name <$email>\r\n";

  // Attempt to send the email
  if (mail($recipient, $subject, $message, $headers)) {
    // Email sent successfully
    header("Location: index.html?success=true");
    exit;
  } else {
    // Handle email sending failure
    header("Location: index.html?success=false&error=email_failed");
    exit;
  }
}
?>
