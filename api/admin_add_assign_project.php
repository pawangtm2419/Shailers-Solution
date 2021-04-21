<?php
include('db.php');
extract($_POST);
$query = "SELECT * FROM ess_assign_project WHERE id = '$id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Project Already Exits.";
}
else 
{
	$date=date('d-m-Y');
	$str_date = $_POST['str_date'];
	$end_date = $_POST['end_date'];
	$query1 = "INSERT INTO ess_assign_project (pro_id, activity, emp_id, str_date, end_date, msg) values ('$pro_id', '$activity', '$emp_id', '$str_date', '$end_date', '$msg')";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Assign Project.";
		$query1 = "SELECT * FROM ess_assign_project WHERE pro_id = '$pro_id'";
		$result1 = mysqli_query($conn, $query1);
		$row1 = mysqli_fetch_assoc($result1);
		$response->id=$row1['id'];
		$response->pro_id=$row1['pro_id'];
		$response->activity=$row1['activity'];
		$response->emp_id=$row1['emp_id'];
		$response->str_date=$row1['str_date'];
	    $response->msg=$row1['msg'];
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