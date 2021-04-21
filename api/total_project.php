<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT count(pro_id) AS total_project FROM ess_assign_project WHERE emp_id='$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("total_project"=>$row['total_project']));
}
echo json_encode($response);
mysqli_close($conn);
?>