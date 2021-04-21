<?php
include('db.php');
$username = $_POST['emp_email'];
$password = $_POST['pass'];
$password=sha1($password);
$query = "SELECT * FROM ess_employee WHERE emp_email='$username' AND BINARY pass='$password'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result)>0)
	{
	    $row = mysqli_fetch_assoc($result);
		$response->status="200";
	    $response->msg="You have successfully login.";
	    $response->emp_id=$row['emp_id'];
		$response->name=$row['emp_name'];
		$response->email=$row['emp_email'];
		$response->mobile=$row['emp_mobile'];
	}
else 
	{
		$response->status="201";
	    $response->msg="Invalid login details.";
	}		
echo json_encode($response);
mysqli_close($conn);
?>