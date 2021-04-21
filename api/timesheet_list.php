<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT * FROM ess_timesheet WHERE emp_id = '$id' ORDER BY timesheet_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("pro_name"=>$row['pro_name'], "activity"=> $row['activity'], "strt_time"=> $row['strt_time'], "end_time"=> $row['end_time'], "hours"=> $row['hours'], "status"=> $row['status'], "descp"=> $row['descp'], "datetime"=> $row['datetime']));
}
echo json_encode($response);
mysqli_close($conn);
?>