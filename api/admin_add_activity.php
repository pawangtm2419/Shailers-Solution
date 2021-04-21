<?php
include('db.php');
extract($_POST);
$activity_name = trim($_POST['activity_name']);
$query = "SELECT * FROM ess_activities WHERE activity_name='$activity_name'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Activity Name Already Exits.";
}
else 
{
	$query1 = "INSERT INTO ess_activities (activity_name) VALUES ('$activity_name')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Activity Name.";
		$query2 = "SELECT * FROM ess_activities WHERE act_id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->act_id=$row2['act_id'];
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