<?php
include('db.php');
extract($_POST);
$query = "SELECT * FROM ess_assign_project WHERE id = '$id' AND pro_id = '$pro_id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$date=date('d-m-Y');
	$str_date = $_POST['str_date'];
	$end_date = $_POST['end_date'];
	$query1 = "UPDATE ess_assign_project SET activity = '$activity', str_date = '$str_date', end_date = '$end_date', msg = '$msg' where id = '$id'";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Updated Assign Project.";
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