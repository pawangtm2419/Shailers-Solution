<?php
include 'db.php';
$dat = date('d-m-Y');
$query = "SELECT count(pro_id) AS delay_project FROM ess_project WHERE pro_end_date < '$dat' AND project_comp=0";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("Delay Project"=>$row['delay_project']));
}
echo json_encode($response);
mysqli_close($conn);
?>