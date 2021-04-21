<?php
include('db.php');
extract($_POST);
$pro_id = $_POST['pro_id'];
$status = $_POST['status'];
$query = "SELECT * FROM ess_project WHERE pro_id = '$pro_id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$query1 = "UPDATE ess_project SET status='$status' WHERE pro_id='$pro_id'";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$response->msg="You have successfully Update Project.";
		$response->status="200";
		$query2 = "SELECT * FROM ess_project WHERE pro_id = '$pro_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->pro_id=$row2['pro_id'];
		$response->status=$row2['status'];
	}
	else 
	{
		$response->status="201";
	    $response->msg="Something Went Wrong";
	}
}	   		
echo json_encode($response);
mysqli_close($conn);
?>