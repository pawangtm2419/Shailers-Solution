<?php
include 'db.php';
$query = "SELECT * FROM ess_assign_project ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_project WHERE pro_id = '".$row['pro_id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
	$query2 = "SELECT * FROM ess_employee WHERE emp_id = '".$row['emp_id']."'";
	$result2 = mysqli_query($conn,$query2);
	$row2 = mysqli_fetch_array($result2);
	$total_cost = $row['pro_cost'] + $row['gst'];
    array_push($response, array("id"=>$row["id"], "pro_id"=>$row["pro_id"], "emp_name"=>$row2["emp_name"], "pro_name"=>$row1['pro_name'], "activity"=> $row['activity'], "str_date"=> $row['str_date'], "end_date"=> $row['end_date'], "msg"=> $row['msg'], "timestamp"=> $row['timestamp']));
}
echo json_encode($response);
mysqli_close($conn);
?>