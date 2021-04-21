<?php
include('db.php');
extract($_POST);
$id = $_POST['id'];
$lead_feedback = $_POST['lead_feedback'];
$remind_date = $_POST['remind_date'];
$comment = $_POST['comment'];
$lead_by = $_POST['lead_by'];
$status = $_POST['status'];
$query = "SELECT * FROM ess_lead_customer WHERE id = '$id' AND status = 1";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Next Lead Already Exits.";
}
else 
{
	$date=date('d-m-Y');
	$time=date('h:i:sa');
	$num0 = rand(100000,9.9999);
    $randnum = "LEAD".$num0 ;
	$query1 = "UPDATE ess_lead_customer SET lead_feedback = '".$lead_feedback."', remind_date = '".$remind_date."', comment = '".$comment."', curr_date = '".$date."', curr_time = '".$time."', lead_by = '".$lead_by."' , status = '".$status."' WHERE id = '$id' ";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$query2 = "SELECT * FROM ess_lead_customer WHERE id = '$id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->lead_feedback=$row2['lead_feedback'];
		$response->remind_date=$row2['remind_date'];
		$response->comment=$row2['comment'];
		$response->lead_by=$row2['lead_by'];
		$response->status=$row2['status'];
		$response->msg="You have successfully Add Lead.";
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