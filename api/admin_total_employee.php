<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT count(emp_id) AS total_employee FROM ess_employee WHERE status = 1";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("Total Employee"=>$row['total_employee']));
}
echo json_encode($response);
mysqli_close($conn);
?>