<?php
include('db.php');
extract($_POST);
$activity_name = $_POST['activity_name'];
$pro_id = $_POST['pro_id'];
$activity_id = $_POST['activity_id'];
$query = "SELECT * FROM ess_assign_activity WHERE pro_id = '$pro_id' AND activity_name='$activity_name'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Assign Activity Already Exits.";
}
else 
{
	$query1 = "INSERT INTO ess_assign_activity (pro_id, activity_name) VALUES ('$pro_id', '$activity_name')";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Assign Activity.";
		$query2 = "SELECT * FROM ess_assign_activity WHERE pro_id = '$pro_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->activity_id=$row2['activity_id'];
		$response->pro_id=$row2['pro_id'];
		$response->activity_name=$row2['activity_name'];
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