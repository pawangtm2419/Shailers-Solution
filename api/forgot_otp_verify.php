<?php
include('db.php');
$emp_email = $_POST['emp_email'];
$otp = $_POST['otp'];
$query1 = mysqli_query($conn,"SELECT * FROM ess_otp WHERE emp_email = '$emp_email'");
$result1 = mysqli_fetch_assoc($query1);
$db_n_otp = $result1['otp'];
if($otp == $db_n_otp)
{ 	
	$query2 = mysqli_query($conn,"UPDATE ess_otp SET otp='' WHERE emp_email = '$emp_email'");
	$response->status="200";
	$response->msg="You have successfully verified.";
}else{
	$response->status="201";
	$response->msg="Email Id OTP does not match.";
}
echo json_encode($response);
mysqli_close($conn);
?>