<?php
include 'db.php';
$id = $_POST['emp_id'];
$end_date = $_POST['end_date'];
$query = "SELECT count(pro_id) AS delay_project FROM ess_assign_project WHERE end_date <'$end_date' AND comp_status='0' AND emp_id='$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("delay_project"=>$row['delay_project']));
}
echo json_encode($response);
mysqli_close($conn);
?>