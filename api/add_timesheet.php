<?php
include('db.php');
extract($_POST);
$date=date('d-m-Y');
$query = "SELECT * FROM ess_timesheet ORDER BY temp_id DESC LIMIT 1";
$result = mysqli_fetch_array ( mysqli_query( $conn, $query ));
$temp=($result['temp_id']) + 1;
//echo $temp; die;
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="User Already Submit Timesheet.";
}else {
	  $query1 = "INSERT INTO ess_timesheet ( temp_id, pro_name, activity, strt_time, end_time, hours, status, descp, emp_id, datetime) values('$temp', '$pro_name', '$activity', '$strt_time', '$end_time', '$hours', '$status', '$descp', '$emp_id', '$date')";
	
	$result1 = mysqli_query($conn,$query1);
	$datee= date(strtotime("$date_time"));	
	$new_query=mysqli_query($conn,"insert into ess_timesheet_total(emp_id, total_hours,date) value('$emp_id', '$hours','$datee')") or die("Query Errorr");
	if($result1) 
	{	
		 $sql="SELECT * FROM ess_timesheet WHERE emp_id = '$emp_id' ORDER BY temp_id DESC";	
		$query3 = mysqli_query($conn,"SELECT * FROM ess_timesheet WHERE emp_id = '$emp_id' ORDER BY temp_id DESC");
		$row = mysqli_fetch_assoc($query3);
		$response->status="200";
		$response->msg="You have successfully Submit Timesheet.";
		$response->pro_name=$row['pro_name'];
		$response->activity=$row['activity'];
		$response->strt_time=$row['strt_time'];
		$response->end_time=$row['end_time'];
		$response->hours=$row['hours'];
		$response->status=$row['status'];
		$response->descp=$row['descp'];
		$response->emp_id=$row['emp_id'];
		$response->datetime= $row['datetime'];
	}else {
		$response->status="201";
	    $response->msg="Something Went Wrong";
	}
}	   		
echo json_encode($response);
mysqli_close($conn);
?>