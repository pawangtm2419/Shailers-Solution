<?php
include 'db.php';
$id = $_POST['id'];
$query = "SELECT * FROM ess_leave_manage WHERE id = '$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_employee WHERE emp_id = '".$row['emp_id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("id"=>$row["id"], "emp_name"=>$row1["emp_name"], "str_date"=>$row['str_date'],"end_date"=>$row["end_date"], "duration"=>$row["duration"], "leave_type"=>$row['leave_type'],"reason"=>$row["reason"], "em_number"=>$row["em_number"], "apply_date"=>$row['apply_date'], "status"=>$row["status"], "timestamp"=>$row['timestamp']));
} 
echo json_encode($response);
mysqli_close($conn);
?>