<?php
include('db.php');
extract($_POST);
$date=date('d-m-Y');
$query = "SELECT * FROM ess_leave_manage WHERE emp_id='$emp_id' AND apply_date='$date'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="User Already Take Leave.";
}else {
	$query1 = "INSERT INTO ess_leave_manage (emp_id, str_date, end_date, duration, leave_type, reason, em_number, apply_date) values('$emp_id','$str_date', '$end_date', '$duration', '$leave_type', '$reason', '$em_number', '$date')";
	$result1 = mysqli_query($conn,$query1);
	if($result1) 
	{
		$query3 = mysqli_query($conn,"SELECT * FROM ess_leave_manage WHERE emp_id = '$emp_id' AND apply_date='$date'");
		$row = mysqli_fetch_assoc($query3);
		$response->status="200";
		$response->msg="You have successfully Apply Take Leave.";
		$response->emp_id=$row['emp_id'];
		$response->str_date=$row['str_date'];
		$response->end_date=$row['end_date'];
		$response->duration=$row['duration'];
		$response->leave_type=$row['leave_type'];
		$response->reason=$row['reason'];
		$response->em_number=$row['em_number'];
		$response->apply_date=$row['apply_date'];
	}else {
		$response->status="201";
	    $response->msg="Something Went Wrong";
	}
}	   		
echo json_encode($response);
mysqli_close($conn);
?>