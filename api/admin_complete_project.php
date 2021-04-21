<?php
include 'db.php';
$query = "SELECT count(pro_id) AS complete_project FROM ess_project WHERE project_comp=1";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("Total Project"=>$row['complete_project']));
}
echo json_encode($response);
mysqli_close($conn);
?>