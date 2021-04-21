<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT * FROM ess_assign_project WHERE emp_id = '$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("id"=>$row['id'], "pro_id"=> $row['pro_id'], "emp_id"=> $row['emp_id'], "activity"=> $row['activity'], "str_date"=> $row['str_date'], "end_date"=> $row['end_date'], "msg"=> $row['msg'], "comp_status"=> $row['comp_status'], "timestamp"=> $row['timestamp']));
}
echo json_encode($response);
mysqli_close($conn);
?>