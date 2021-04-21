<?php
include 'db.php';
$query = "SELECT * FROM ess_timesheet ORDER BY 	timesheet_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_employee WHERE emp_id='".$row['emp_id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("emp_id"=>$row1["emp_id"], "emp_name"=>$row1["emp_name"], "hours"=>$row['hours'], "datetime"=> $row['datetime']));
}
echo json_encode($response);
mysqli_close($conn);
?>