<?php
include('db.php');
$username = $_POST['emp_email'];
$password = $_POST['pass'];
$password = sha1($password);
$query = "SELECT * FROM ess_admin_login WHERE username='$username' AND BINARY pass='$password'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result)>0)
	{
	    $row = mysqli_fetch_assoc($result);
		$response->status="200";
	    $response->msg="You have successfully login.";
	    $response->id=$row['id'];
		$response->username=$row['username'];
		$response->user_type=$row['user_type'];
	}
else 
	{
		$response->status="201";
	    $response->msg="Invalid login details.";
	}		
echo json_encode($response);
mysqli_close($conn);
?>