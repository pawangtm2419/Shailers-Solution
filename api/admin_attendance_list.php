<?php
include 'db.php';
$query = "SELECT *  FROM ess_attendance ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT *  FROM ess_employee WHERE emp_id = '".$row['emp_id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("emp_id"=>$row['emp_id'], "emp_name"=>$row1['emp_name'], "att_intime"=> $row['att_intime'], "att_outtime"=> $row['att_outtime'], "att_indate"=> $row['att_indate'], "pic_intime"=> $row['pic_intime'], "pic_outtime"=> $row['pic_outtime']));
}
echo json_encode($response);
mysqli_close($conn);
?>