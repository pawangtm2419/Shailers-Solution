<?php
include('db.php');
$emp_email = $_POST['emp_email'];
$query = "SELECT * FROM ess_employee WHERE emp_email = '$emp_email' AND status='1'";
$result = mysqli_query($conn,$query);
if(mysqli_num_rows($result) > 0)
{
 	$code = rand(1000,9999);
 	mysqli_query($conn,"UPDATE ess_otp SET otp='$code' WHERE emp_email = '$emp_email'");
	include('mail/r_otp.php');
	$query = mysqli_query($conn,"SELECT * FROM ess_otp WHERE emp_email = '$emp_email'");
	$row = mysqli_fetch_assoc($query);
	$response->id=$row['id'];
	$response->status="200";
	$response->msg="OTP Sent";
	$response->otp=$code;	
}else {
 	$response->status="201";
 	$response->msg='Email Id is not registered or not verified.';
 	$response->otp="";
 }
 echo json_encode($response);
 mysqli_close($conn);
?>