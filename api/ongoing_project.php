<?php
include 'db.php';
$id = $_POST['emp_id'];
$end_date = $_POST['end_date'];
$query = "SELECT count(pro_id) AS onging_total FROM ess_assign_project WHERE end_date >= '$end_date' AND emp_id='$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("onging_total"=>$row['onging_total']));
}
echo json_encode($response);
mysqli_close($conn);
?>