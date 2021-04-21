<?php
include('db.php');
$emp_email = $_POST['emp_email'];
$password = $_POST['pass'];
$password = hash('sha1',$password);
$new_password = $_POST['new_password'];
$new_password = hash('sha1',$new_password);
$confirm_password = $_POST['confirm_password'];
$confirm_password = hash('sha1',$confirm_password);
$query1 = "SELECT * FROM ess_employee WHERE emp_email = '$emp_email' AND status='1'";
$result1 = mysqli_query($conn,$query1);
if(mysqli_num_rows($result1)>0) 
{
	if($new_password == $confirm_password)
	{
		$query2 = "UPDATE ess_employee SET pass='$new_password' WHERE emp_email='$emp_email'";
		$result2 = mysqli_query($conn,$query2);
		if($result2)
		{
			$response->status="200";
			$response->msg="Your password has been successfully changed.";
		}else {
			$response->msg='Something Went Wrong.';
			$response->status="201";
		}

	}else {
		$response->status="201";
		$response->msg='New password and confirm password does not match.';
		
	}	
}else {
	$response->status="201";
	$response->msg='Please enter the correct Email Id.';
}

echo json_encode($response);
mysqli_close($conn);

?>