<?php
include('db.php');
$emp_email = $_POST['emp_email'];
$password = $_POST['pass'];
$password = hash('sha1',$password);
$query1 = "SELECT * FROM ess_employee WHERE emp_email = '$emp_email' AND status='1'";
$result1 = mysqli_query($conn,$query1);
if(mysqli_num_rows($result1) > 0) 
{
	$query2 = "UPDATE ess_employee SET pass='$password' WHERE emp_email='$emp_email'";
	$result2 = mysqli_query($conn,$query2);
	if($result2)
	{
		$response->status="200";
		$response->msg="Your password has been successfully changed.";
	}
}
else {
	$response->status="201";
	$response->msg='Please enter the correct Email Id.';
}
echo json_encode($response);
mysqli_close($conn);

?>