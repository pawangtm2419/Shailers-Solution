<?php
include 'db.php';
$dat = date('d-m-Y');
$query = "SELECT count(pro_id) AS ongoing_project FROM ess_project WHERE pro_end_date >='$dat' AND project_comp=0";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("Ongoing Project"=>$row['ongoing_project']));
}
echo json_encode($response);
mysqli_close($conn);
?>