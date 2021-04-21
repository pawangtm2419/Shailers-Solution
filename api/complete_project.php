<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT count(pro_id) AS complete_project FROM ess_assign_project WHERE comp_status=1 AND emp_id='$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("complete_project"=>$row['complete_project']));
}
echo json_encode($response);
mysqli_close($conn);
?>