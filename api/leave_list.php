<?php
include 'db.php';
extract($_POST);
$query = "SELECT * FROM ess_leave_manage WHERE emp_id='$emp_id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("emp_id"=>$row['emp_id'], "str_date"=> $row['str_date'], "end_date"=> $row['end_date'], "duration"=> $row['duration'], "leave_type"=> $row['leave_type'], "reason"=> $row['reason'], "em_number"=> $row['em_number'], "apply_date"=> $row['apply_date'], "status"=> $row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>