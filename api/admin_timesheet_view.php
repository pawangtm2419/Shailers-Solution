<?php
include 'db.php';
$id = $_POST['emp_id'];
$date = $_POST['datetime'];
$query = "SELECT * FROM ess_timesheet where emp_id = '$id' AND datetime = '$date'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_project WHERE pro_id='".$row['pro_name']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("pro_name"=> $row1['pro_name'],"activity"=> $row['activity'], "strt_time"=> $row['strt_time'], "end_time"=> $row['end_time'], "hours"=> $row['hours'],  "descp"=> $row['descp'], "status"=> $row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>