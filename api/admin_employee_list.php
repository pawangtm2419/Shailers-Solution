<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT * FROM ess_employee ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("emp_id"=> $row['emp_id'],"emp_name"=> $row['emp_name'], "emp_desg"=> $row['emp_desg'], "emp_mobile"=> $row['emp_mobile'], "emp_email"=> $row['emp_email'], "salary"=> $row['salary'], "status"=> $row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>