<?php
include('db.php');
extract($_POST);
$id = $_POST['cus_id'];
$cus_name = $_POST['cus_name'];
$mobile = $_POST['mobile'];
$category = $_POST['category'];
$lead_feedback = $_POST['lead_feedback'];
$remind_date = $_POST['remind_date'];
$comment = $_POST['comment'];
$lead_by = $_POST['lead_by'];
$query = "SELECT * FROM ess_lead_customer WHERE cus_id = '$id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Lead Already Exits.";
}
else 
{
	$date=date('d-m-Y');
	$time=date('h:i:sa');
	$num0 = rand(100000,9.9999);
    $randnum = "LEAD".$num0 ;
	$query1 = "INSERT INTO ess_lead_customer (cus_id, cus_name, mobile, category, lead_feedback, remind_date, comment, curr_date, curr_time, lead_by) VALUES ('$randnum','$cus_name', '$mobile', '$category', '$lead_feedback', '$remind_date', '$comment', '$date', '$time', '$lead_by')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Lead.";
		$query2 = "SELECT * FROM ess_lead_customer WHERE id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->cus_id=$row2['cus_id'];
		$response->cus_name=$row2['cus_name'];
		$response->mobile=$row2['mobile'];
		$response->category=$row2['category'];
		$response->lead_feedback=$row2['lead_feedback'];
		$response->remind_date=$row2['remind_date'];
		$response->comment=$row2['comment'];
		$response->lead_by=$row2['lead_by'];
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